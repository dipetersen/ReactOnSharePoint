import React, {Component} from 'react';
import {Link} from 'react-router';
import ContactFormApi from '../api/ContactApi';
import ContactList from './ContactList';
import toastr from 'toastr';

class ContactPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        const api = new ContactFormApi();
        const cts = api.getAllContacts();
        cts.done(function(response){
            console.log("ajax response");
            console.log(response);
            if(response.value) {
                this.setState({contacts: response.value});
            } else {
                console.log(response);
            }
        }.bind(this));
        cts.fail(function(error){
            console.log(error);
            toastr.error("Could not get the list of contacts.");
        })
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <Link to="newcontact" className="btn btn-default">Add Contact</Link>
                <ContactList contacts={this.state.contacts}  />
            </div>
        );
    }
}

export default ContactPage;