import React from 'react';
import Builder from "./screens/Builder";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar";
import handlePDFDownload from "./helpers/downloadPDF";
import Profiles from "./screens/Profiles";
import ShowProfile from "./screens/Profiles/show";

function App() {
    const navLinks = [
        {name: 'Profiles', link: '/profiles'}]

    React.useEffect(() => {
        if (window.location.pathname !== "/profiles") {
            navLinks.push({
                name: 'Download as PDF',
                onClick: () => handlePDFDownload(),
                className: 'btn btn-sm btn-outline-success text-white'
            })
        }
    }, [])

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
