import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;
