import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPge from './Landingpage';
import AboutMe from './Aboutme';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Reset from './thanks';
import Wellcomback from './wellcomback';
import Skills from './skill';
import { BrowserRouter } from 'react-router-dom';

const Main = ()=> (
    <BrowserRouter>
<Switch>
<Route exact path='/' component={ LandingPge } />
<Route path='/forgot' component={ AboutMe } />
<Route path='/contact' component={ Contact } />
<Route path='/login' component={ Login } />
<Route path='/signup' component={ Signup } />
<Route path='/reset' component={ Reset } />
<Route path='/wellcomback' component={ Wellcomback } />
<Route path='/skills' component={ Skills } />
</Switch>
</BrowserRouter>

);

export default Main;