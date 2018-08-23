import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <header className="App-header">
                <ul>
                    <li>
                        <Link to="/">Home::Interests</Link>
                    </li>
                    <li>
                        <Link to="/thingsILove">Go to Things I Love</Link>
                    </li>
                    <li>
                        <Link to="/dontLike">Go to Things I Don't Like So Much</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default NavBar;