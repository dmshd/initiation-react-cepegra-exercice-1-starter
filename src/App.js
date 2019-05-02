import React from 'react';
import './App.css';
import SimpleComponent from './components/SimpleComponent';
import ClassComponent from './components/ClassComponent';
import MyHeader from './components/MyHeader';

const App = () => (
  <div className="appcontainer">
    <MyHeader title='mon super component'>
      <p> React, c'est super ! </p>
    </MyHeader>
    <SimpleComponent />
    <ClassComponent />
  </div>
)

export default App;
