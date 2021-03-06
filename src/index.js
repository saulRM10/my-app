import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import new component 
import TestComponent from './components/text';
import FormComp from './components/form';
import FormInput from './components/formInput';

// import component with hook 
import Counter from './components/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div>
   {/* <FormInput /> 
  <TestComponent name="saul" /> */}

   <Counter />
   </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
