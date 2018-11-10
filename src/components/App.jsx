import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Visitor from './Visitor';
import Admin from './Admin';

function App(){
  const bottomBarStyles ={
    width: '100%',
    backgroundColor: '#87A06B',
    height: '40px'
  };
  
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Visitor} />
        <Route path='/admin' component={Admin} />
      </Switch>
      <div style={bottomBarStyles}></div>
    </div>
  );
}

export default App;
