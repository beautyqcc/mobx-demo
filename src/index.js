import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirstPage from './pages/firstPage'
import  {Provider} from 'mobx-react'
import registerServiceWorker from './registerServiceWorker';
import  stores from './stores'
import {Switch,Route,BrowserRouter} from 'react-router-dom'



ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter >
            <Switch>
               <Route  exact path='/' component={App}/>
               <Route path='/firstpage' component={FirstPage}/>
            </Switch>
        </BrowserRouter>

    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
