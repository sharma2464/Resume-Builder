import React from 'react';
import Builder from "./screens/Builder";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Profiles from "./screens/Profiles";
import ShowProfile from "./screens/Profiles/show";

function App(props) {
    const navLinks = [
        {name: 'Home', link: '/'},
        {name: 'Profiles', link: '/profiles'},
    ]

    return (
        <Router>
            <Navbar
                brandName='Resume Builder'
                brandLink="/"
                links={[...navLinks]}/>
            <Switch>
                <Route exact path='/' component={Builder}/>
                <Route exact path='/profiles' component={Profiles}/>
                <Route exact path='/profiles/:id' component={ShowProfile}/>
            </Switch>
        </Router>
    );
}

export default App;
