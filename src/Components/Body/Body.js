import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';
import { Route, Redirect, Switch} from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route  path='/menu' exact component={Menu}></Route>
                <Route  path='/about' exact component={About}></Route>
                <Route  path='/contact' exact component={Contact}></Route>
                <Redirect from='/' to='/home'/>
            </Switch>          
        </div>
    );
};

export default Body;