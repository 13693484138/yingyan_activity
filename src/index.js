import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import './index.css';
import Activityrule from './container/activityrule/activityrule';
import Activity from './container/activity/activity';
import RankingList from './container/rankingList/rankingList'
import Information from './container/information/information';
import Exchange from './container/exchange/exchange';
import ContesTants from './container/contesTants/contesTants';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	 (<BrowserRouter>
            <div>
                <Route path="/contestants" exact component={ContesTants}></Route>
                <Route path="/exchange" exact component={Exchange}></Route>
                <Route path="/rankinglist" exact component={RankingList}></Route>
                <Route path="/activity" exact component={Activity}></Route>
                <Route path="/information" exact component={Information}></Route>
                <Route path="/activityrule" exact component={Activityrule}></Route>
                <Route path="/" exact component={Activity}></Route>
            </div>
     </BrowserRouter>),
	document.getElementById('root'));
registerServiceWorker();
