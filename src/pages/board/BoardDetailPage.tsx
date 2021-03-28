import React from 'react';
import { RouteComponentProps } from 'react-router';
import { BoardDetailTemplate } from '../../components/templates';
import { tmpList } from '../../dummyData';
import { IBoard } from '../../types';

// react-router 에서 제공하는 match, location, history 등의 type이 지정된 type: RouteComponentProps
const BoardDetailPage:React.FC<RouteComponentProps<{id:string;}>> = ({match}) => {

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [detail, setDetail] = React.useState<IBoard | null>(null)

  // 서버 fetch 가상 로직
  const fetchData = async (id:string) => {
    try {
      setIsLoading(true)
      
      const res:IBoard | null = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const detailIdx = tmpList.findIndex(item => item.id === id)

          if(detailIdx > -1) resolve(tmpList[detailIdx]);
          else reject(new Error('not Found!'));
        }, 1000);
      });

      setDetail(res)
    } catch (error) {
      console.log('error',error)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchData(match.params.id)
  },[match])

  if(isLoading){
    return (
      <div>loading...</div>
    );
  } else if(detail) {
    return (
      <BoardDetailTemplate detail={detail}/>
    );
  } else {
    return (
      <div />
    );
  }
}

export default BoardDetailPage;