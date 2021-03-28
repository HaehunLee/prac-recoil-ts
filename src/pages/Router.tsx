import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, BoardListPage, BoardDetailPage } from '.';

const Router:React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/board/list" component={BoardListPage}/>
                <Route exact path="/board/detail/:id" component={BoardDetailPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router