import React from 'react';
import Builder from "./screens/Builder";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar";
import handlePDFDownload from "./helpers/downloadPDF";
import Profiles from "./screens/Profiles";

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

    const Profile = props => {
        console.log('ENV', process.env)
        let x = window.location
        let y = props.match
        console.log('Location', {...x})
        console.log('Match', y)
        return <>
            Profile
        </>
    }

    return (
        <Router>
            <Navbar
                brandName='Resume Builder'
                brandLink="/"
                links={[...navLinks]}/>
            <Switch>
                <Route exact path='/' component={Builder}/>
                <Route exact path='/profiles' component={Profiles}/>
                <Route exact path='/profiles/:id' component={Profile}/>
            </Switch>
        </Router>
    );
}

export default App;
