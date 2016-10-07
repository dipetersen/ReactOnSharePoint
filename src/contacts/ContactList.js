import React, {Component} from 'react';
import {Link} from 'react-router';

class ContactList extends Component {
    render() {
        const createContactRow = function(contact) {
            return (

                    <tr key={contact.id}>
                        <td>
                            <Link to={`contact/${contact.id}`}>{contact.id}</Link>
                        </td>
                        <td>{contact.firstName}</td>
                        <td>{contact.Title}</td>
                        <td>{contact.phoneNumber}</td>
                        <td>{contact.address}</td>
                        <td>{contact.city}</td>
                        <td>{contact.state}</td>
                        <td>{contact.zipCode}</td>
                        <td>Delete</td>
                    </tr>
            )
        }

        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.map(createContactRow, this)}
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

export default ContactList;