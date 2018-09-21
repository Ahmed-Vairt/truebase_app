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
import Company from './company';
import Profile from './profile';
import Ask from './ask';
import Newask from './new_ask';
import Terms from './terms';
import Privacy from './privacy';
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
<Route path='/setup/account' component={ Wellcomback } />
<Route path='/setup/contribute' component={ Skills } />
<Route path='/company' component={ Company } />
<Route path='/profile' component={ Profile } />
<Route path='/ask' component={ Ask } />
<Route path='/new_ask' component={ Newask } />
<Route path='/terms' component={ Terms } />
<Route path='/privacy' component={ Privacy } />
</Switch>
</BrowserRouter>

);

export default Main;