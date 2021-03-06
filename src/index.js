import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {Provider} from 'mobx-react'
import registerServiceWorker from './registerServiceWorker';
import  stores from './stores'



ReactDOM.render(<Provider {...stores}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
