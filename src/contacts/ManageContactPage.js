import React, {Component} from 'react';
import ContactForm from './ContactForm';
import ContactFormApi from '../api/ContactFormApi';
import toastr from 'toastr';

var ContactApi = new ContactFormApi();


class ManageContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact : { firstName: '', Title: '', phoneNumber: '', address: '', city: '', state: '', zipCode: ''}
        };
        this.saveContact = this.saveContact.bind(this);
        this.setContactState = this.setContactState.bind(this);
        console.log(ContactApi);
    }

    componentDidMount(){
        console.log("passed in parameter id::" + this.props.params.id);
        const contactId = this.props.params.id;
        if(contactId) {
            const ret = ContactApi.getContactById(contactId);
            ret.done(function(response){
                console.log("response from getContactById");
                console.log(response);
                if(response.ID) {
                    console.log("setting the state.  It should refresh now.");
                    this.setState({
                        contact: response
                    });
                };
                console.log(this.state);
            }.bind(this)).fail(function(err){
                toastr.error('Could not get list item.');
                this.context.router.transitionTo('/contacts');
            })
        }
    }

    setContactState(event) {
        this.setState({dirty: true});
        const contact = this.state.contact;
        const field = event.target.id;
        const value = event.target.value;
        contact[field] = value;
        return this.setState({contact: contact});
    }

    saveContact(event) {
        event.preventDefault();
        let save;
        if(this.state.contact.ID !== undefined && this.state.contact.ID !== '') {
            console.log('updating the contact with the id of: ' + this.state.contact.ID);
            save = ContactApi.updateContact(this.state.contact.ID, this.state.contact);
        } else {
            save = ContactApi.newContact(this.state.contact);
        }
        save.done(function(){
            toastr.success('Contact updated.');
            this.setState({
                dirty: false
            });
            this.context.router.transitionTo('/contacts');
        }.bind(this)).fail(function(){
            toastr.error('Error saving contact');
            this.context.router.transitionTo('/contacts');
        }.bind(this));
    }

    render() {
        console.log("rendering ManageContactPage");
        console.log(this.state.contact);
        return (
            <ContactForm
                contact={this.state.contact}
                onChange={this.setContactState}
                onSave={this.saveContact}
            />
        );
    }
}

ManageContactPage.contextTypes = {
    router: React.PropTypes.object
}

export default ManageContactPage;