import * as React from "react";
import 'bootstrap/dist/js/bootstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SimpleLineChart } from './../LineCharts/SimpleLineChart';
export class Header extends React.Component {
    public render(): React.ReactElement {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Line Charts
        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to={`/linechart1`}>Example 0</Link>
                                    <a className="dropdown-item" href="http://bing.com">Example 2</a>
                                    <a className="dropdown-item" href="http://bing.com">Example 2</a>
                                    <a className="dropdown-item" href="http://bing.com">Example 3</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path={`/linechart1`} render={(props) => <SimpleLineChart />} />
            </Router>
        );
    }
}