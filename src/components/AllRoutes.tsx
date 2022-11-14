import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Landing from "./Landing";

function AllRoutes() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/"></Route> <Landing /> <Route />
                <Route path="/about"></Route> <AboutMe /> <Route />
                <Route path="/skills"></Route> <Projects /> <Route />
                <Route path="/contacts"></Route> <Contact /> <Route />
            </Switch>
        </Router>
    );
}

export default AllRoutes;