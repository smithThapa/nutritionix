import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {Provider} from 'react-redux';
import configStore from './redux/store'
import App from './App';


ReactDOM.render(
<Provider store={configStore()}>
    <App />
</Provider>, document.getElementById('root'));


