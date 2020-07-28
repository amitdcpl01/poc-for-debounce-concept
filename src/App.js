import React from 'react';
import './App.css';
import { Route, HashRouter, NavLink } from 'react-router-dom';
import login from './login';
import count from './count';
import fetch from './fetch';

function App() {
  return (
    <div className="App">
            <h1> WelcomePage</h1>
            <HashRouter>
                <div>
                    <NavLink to='/'> login</NavLink>
                    <NavLink to='/count'> count</NavLink>
                    <NavLink to='/fetch'> fetch</NavLink>
                </div>
                <div>
                    <Route exact path='/' component={login}></Route>
                    <Route exact path='/count' component={count}></Route>
                    <Route exact path='/fetch' component={fetch}></Route>
                </div>
            </HashRouter>
        </div>
  );
}

export default App;
