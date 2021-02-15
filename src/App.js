import React,{Component} from 'react';

import {BrowserRouter,Switch,Route,Redirect}from 'react-router-dom';
import Header from './Components/Header';
import Details from './Components/Details';
import Home from './Components/Home';


import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>   
              <Switch>
                  <Route path='/home' component={Home} />
                  <Route path='/details/:id' component={Details}/>
                  <Redirect to="/home" />
              </Switch>
          
          
              
            
            
        </BrowserRouter>
    </div>
  );
}

export default App;
