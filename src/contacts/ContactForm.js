import React, {Component} from 'react';


const STATES = [
    'AL|Alabama', 'AK|Alaska', 'AZ|Arizona', 'AR|Arkansas', 'CA|California', 'CO|Colorado', 'CT|Connecticut', 'DE|Delaware', 'DC|District of Columbia', 'FL|Florida',
    'GA|Georgia', 'HI|Hawaii','ID|Idaho', 'IL|Illinois', 'IN|Indiana', 'IA|Iowa', 'KS|Kansas', 'KY|Kentucky', 'LA|Louisiana', 'ME|Maine', 'MD|Maryland',
    'MA|Massachusettes', 'MI|Michigan', 'MN|Minnesota', 'MS|Mississippi','MO|Missouri', 'MT|Montana', 'NE|Nebraska', 'NV|Nevada', 'NH|New Hampshire',
    'NJ|New Jersey', 'NM|New Mexico', 'NY|New York', 'NC|North Carolina', 'ND|North Dakota', 'OH|Ohio', 'OK|Oklahoma', 'OR|Oregon', 'PA|Pennsylvania', 
    'RI|Rhode Island', 'SC|South Carolina', 'SD|South Dakota', 'TN|Tennessee', 'TX|Texas', 'UT|Utah', 'VT|Vermont', 'VA|Virginia', 'WA|Washington', 'WV|West Virginia',
    'WI|Wisconsin', 'WY|Wyoming'
]


class ContactForm extends Component {

    render() {
        return (
            <div className="form-horizontal">
                <div className='form-group'>
                    <label htmlFor='firstName' className='col-sm-4 control-label'>First Name</label>
                    <div className="col-sm-6">
                        <input type="text" onChange={this.props.onChange} className="form-control" id="firstName" value={this.props.contact.firstName} />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='Title' className='col-sm-4 control-label'>Last Name</label>
                    <div className="col-sm-6">
                        <input type="text" onChange={this.props.onChange} className="form-control" id="Title" value={this.props.contact.Title} />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='phoneNumber' className='col-sm-4 control-label'>Phone Number</label>
                    <div className="col-sm-6">
                        <input type="text" onChange={this.props.onChange} className="form-control" id="phoneNumber" value={this.props.contact.phoneNumber} />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='address' className='col-sm-4 control-label'>Address</label>
                    <div className="col-sm-6">
                        <textarea className="form-control" onChange={this.props.onChange} id="address" value={this.props.contact.address} />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='city' className='col-sm-4 control-label'>City</label>
                    <div className="col-sm-6">
                        <input type="text" onChange={this.props.onChange} className="form-control" id="city" value={this.props.contact.city} />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='state' className='col-sm-4 control-label'>State</label>
                    <div className="col-sm-6">
                        <select className="form-control" id="state" value={this.props.contact.state} onChange={this.props.onChange} >
                            {
                                STATES.map(function(v){
                                    const s = v.split('|');
                                    const a = s[0];
                                    const f = (s[1] !== undefined ? s[1] : s[0]);
                                    return <option key={a} value={a}>{f}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='zipCode' className='col-sm-4 control-label'>Zip Code</label>
                    <div className="col-sm-6">
                        <input type="text" onChange={this.props.onChange} className="form-control" id="zipCode" value={this.props.contact.zipCode} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-6">
                        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;