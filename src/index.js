import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//First arguement is name of component
//Second arguement is Location of where you want component imserted to 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
