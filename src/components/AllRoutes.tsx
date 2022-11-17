import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Landing from "./Landing";

type Props = { handleArrowClick: React.MouseEventHandler<SVGElement> }

function AllRoutes({handleArrowClick}: Props) {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/"></Route> <Landing handleArrowClick={handleArrowClick}/> <Route />
                <Route path="/about"></Route> <AboutMe /> <Route />
                <Route path="/skills"></Route> <Projects /> <Route />
                <Route path="/contacts"></Route> <Contact /> <Route />
            </Switch>
        </Router>
    );
}

export default AllRoutes;