import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Profile from './page/Profile';
import NotFound from './page/NotFound';
import Login from './page/Login';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to='/' activeStyle={{ fontSize: 5 }} exact>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile'>profile</NavLink>
        </li>
        <li>
          <NavLink to='/profile/33'>profile/33</NavLink>
        </li>
        <li>
          <NavLink to='/about'>about</NavLink>
        </li>
        <li>
          <NavLink to='/login'>login</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/profile' component={Profile} />
        <Route path='/about' component={About} />
        <Route path='/' exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
