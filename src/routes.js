import React, {Component} from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './App';
import Home from './common/homepage';
import ContactPage from './contacts/ContactPage';
import ManageContactPage from './contacts/ManageContactPage';
import NotFoundPage from './common/notFoundPage';

class routes extends Component {
  render() {
    return (
      <Route path="/" component={App}>
        <DefaultRoute component={Home} />
        <Route name="contacts" path="contacts" component={ContactPage} />
        <Route name="addContact" path="contact" component={ManageContactPage} />
        <Route name="manageContact" path="contact/:id" component={ManageContactPage} />
        <NotFoundRoute component={NotFoundPage} />
      </Route>
    )
  }
}
export default routes;
