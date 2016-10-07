import React, {Component} from 'react';
import {Link} from 'react-router';

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Is not found; what you searched for.</p>
                <p><Link to="app">Back to Home</Link></p>
            </div>
        );
    }
}

export default NotFoundPage;