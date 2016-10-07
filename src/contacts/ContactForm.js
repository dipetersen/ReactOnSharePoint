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
    constructor(props, context) {
        super(props, context);
        console.log('ContactForm Constructor')
    }

    renderTextInput(id, label, value) {
        return this.renderField(id,label,
            <input type="text" onChange={this.props.onChange} className="form-control" id={id} ref={id} defaultValue={value}/>
        )
    }

    renderTextArea(id, label, value) {
        return this.renderField(id, label,
            <textarea className="form-control" onChange={this.props.onChange} id={id} ref={id} defaultValue={value}/>
        )
    }

    renderSelect(id, label, values, value) {
        var options = values.map(function(v){
            const s = v.split('|');
            const a = s[0];
            const f = (s[1] !== undefined ? s[1] : s[0]);
            return <option key={a} value={a}>{f}</option>
        })
        return this.renderField(id,label,
            <select className="form-control" id={id} ref={id} defaultValue={value} onChange={this.props.onChange}>
                {options}
            </select>
        )
    }

    renderField(id, label,field){
        return <div className='form-group'>
                    <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
                    <div className="col-sm-6">
                        {field}
                    </div>
               </div>
    }

    render() {
        return (
            <div className="form-horizontal">
                {this.renderTextInput('firstName', 'First Name', this.props.contact.firstName)}
                {this.renderTextInput('Title', 'Last Name', this.props.contact.Title)}
                {this.renderTextInput('phoneNumber', 'Phone Number', this.props.contact.phoneNumber)}
                {this.renderTextArea('address','Address', this.props.contact.address)}
                {this.renderTextInput('city','City', this.props.contact.city)}
                {this.renderSelect('state',"State",STATES, this.props.contact.state)}
                {this.renderTextInput('zipCode','Zip Code', this.props.contact.zipCode)}
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