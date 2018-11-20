import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Visitor from './Visitor';
import Admin from './Admin';

function App(){


  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Visitor} />
        <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname} />} />
      </Switch>
    </div>
  );
}



export default App;
