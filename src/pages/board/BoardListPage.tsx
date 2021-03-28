import React from 'react';
import { BoardListTemplate } from '../../components/templates';
import { tmpList } from '../../dummyData';
import { IBoard } from '../../types';

const BoardListPage:React.FC = () => {
  const [list, setList] = React.useState<Array<IBoard> | null>()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  // 서버 fetch 가상 로직
  const fetchData = async () => {
    try {
      setIsLoading(true)
      
      const res:Array<IBoard> | null = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if(tmpList && tmpList.length > 0) resolve(tmpList);
          else reject(new Error('not Found!'));
        }, 1000);
      });

      setList(res)
    } catch (error) {
      console.log('error',error)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchData()
  },[])

  if(isLoading) {
    return (
      <div>loading...</div>
    );
  }
  else if(list && list.length > 0) {
    return (
      <BoardListTemplate list={list}/>
    );
  }
  else {
    return (
      <div />
    );
  }
}

export default BoardListPage;