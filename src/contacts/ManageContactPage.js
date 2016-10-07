import React, {Component} from 'react';
import ContactForm from './ContactForm';
import ContactFormApi from '../api/ContactApi';
import toastr from 'toastr';

var ContactApi = new ContactFormApi();


class ManageContactPage extends Component {
    constructor() {
        super();
        this.state = {
            contact: { id: '', firstName: '', Title: '', phoneNumber: '', address: '', city: '', state: '', zipCode: ''},
        };
        this.saveContact = this.saveContact.bind(this);
        this.setContactState = this.setContactState.bind(this);
        console.log(ContactApi);
    }

    componentWillMount(){
        console.log("passed in parameter id::" + this.props.params.id);
        const contactId = this.props.params.id;
        if(contactId) {
            this.setState({contact: ContactApi.getContactById(contactId)});
        }
    }

    setContactState(event) {
        console.log(event.target);
        this.setState({dirty: true});
        const contact = this.state.contact;
        const field = event.target.id;
        const value = event.target.value;
        console.log("field:" + field + "  ::  value:" + value);
        contact[field] = value;
        return this.setState({contact: contact});
    }
    saveContact(event) {
        event.preventDefault();
        if(this.state.contact.id !== undefined) {
            ContactApi.updateContact(this.state.contact);
        } else {
            ContactApi.newContact(this.state.contact);
        }
        this.setState({dirty: false});
        toastr.success('Contact saved');
        //this.transitionTo('contacts');
    }

    render() {
        return (
            <ContactForm
                contact={this.state.contact}
                onChange={this.setContactState}
                onSave={this.saveContact}
             />
        );
    }
}


export default ManageContactPage;