
import $ from 'jquery';

var contacts = {
    "value" : [    
        {ID:1,firstName:"Kelly",Title:"Stanley",phoneNumber:"1-(406)211-1506",address:"17 Debra Lane",city:"Missoula",state:"MT",zipCode:"59806"},
        {ID:2,firstName:"Katherine",Title:"Wagner",phoneNumber:"1-(816)328-8808",address:"01886 Buhler Center",city:"Kansas City",state:"MO",zipCode:"64144"},
        {ID:3,firstName:"Frank",Title:"Anderson",phoneNumber:"1-(412)530-7843",address:"05 Reindahl Avenue",city:"Pittsburgh",state:"PA",zipCode:"15220"},
        {ID:4,firstName:"Kathryn",Title:"Stewart",phoneNumber:"1-(801)920-1253",address:"3 Hoard Point",city:"Salt Lake City",state:"UT",zipCode:"84140"},
        {ID:5,firstName:"Emily",Title:"Banks",phoneNumber:"1-(702)528-7049",address:"3 Ridgeview Junction",city:"Las Vegas",state:"NV",zipCode:"89120"},
        {ID:6,firstName:"Lillian",Title:"Boyd",phoneNumber:"1-(202)938-0302",address:"614 Manitowish Crossing",city:"Washington",state:"DC",zipCode:"20022"},
        {ID:7,firstName:"Diane",Title:"Burke",phoneNumber:"1-(615)627-2320",address:"92626 Annamark Pass",city:"Nashville",state:"TN",zipCode:"37228"},
        {ID:8,firstName:"Donald",Title:"Gilbert",phoneNumber:"1-(713)880-8938",address:"98701 Artisan Place",city:"Houston",state:"TX",zipCode:"77228"},
        {ID:9,firstName:"Louise",Title:"Morgan",phoneNumber:"1-(682)245-8030",address:"8099 Esker Park",city:"Fort Worth",state:"TX",zipCode:"76192"},
        {ID:10,firstName:"Sarah",Title:"Robinson",phoneNumber:"1-(828)173-3934",address:"8 Maple Park",city:"Asheville",state:"NC",zipCode:"28805"},
        {ID:11,firstName:"Russell",Title:"Morgan",phoneNumber:"1-(785)987-5412",address:"0 Fairview Trail",city:"Topeka",state:"KS",zipCode:"66629"},
        {ID:12,firstName:"Antonio",Title:"Garcia",phoneNumber:"1-(602)624-5364",address:"752 Leroy Crossing",city:"Phoenix",state:"AZ",zipCode:"85072"},
        {ID:13,firstName:"Anne",Title:"Cook",phoneNumber:"1-(502)232-8771",address:"7018 Manufacturers Parkway",city:"Louisville",state:"KY",zipCode:"40210"},
        {ID:14,firstName:"Carol",Title:"Wagner",phoneNumber:"1-(816)785-8789",address:"57 Raven Hill",city:"Kansas City",state:"MO",zipCode:"64144"},
        {ID:15,firstName:"Thomas",Title:"Vasquez",phoneNumber:"1-(865)599-6667",address:"077 Canary Park",city:"Knoxville",state:"TN",zipCode:"37924"},
        {ID:16,firstName:"Diane",Title:"Hudson",phoneNumber:"1-(617)360-2825",address:"15873 Utah Road",city:"Boston",state:"MA",zipCode:"02109"},
        {ID:17,firstName:"Denise",Title:"Johnson",phoneNumber:"1-(402)115-6796",address:"58 Crest Line Street",city:"Omaha",state:"NE",zipCode:"68134"},
        {ID:18,firstName:"Edward",Title:"Foster",phoneNumber:"1-(404)573-2560",address:"07 Fuller Pass",city:"Atlanta",state:"GA",zipCode:"30356"},
        {ID:19,firstName:"Doris",Title:"Peters",phoneNumber:"1-(319)588-5492",address:"4 Cody Lane",city:"Cedar Rapids",state:"IA",zipCode:"52410"},
        {ID:20,firstName:"Rose",Title:"Ramirez",phoneNumber:"1-(323)928-5717",address:"57 Hanson Plaza",city:"Los Angeles",state:"CA",zipCode:"90060"}
    ]
}

class ContactFormApi {

    _generateId() {
        const lastContact = contacts.value.slice(-1)[0];
        const lastContactId = lastContact.ID;
        return lastContactId + 1;
    }

    _clone(item) {
        return JSON.parse(JSON.stringify(item));
    }

    getAllContacts() {
        const deferred = $.Deferred();
        deferred.resolve(this._clone(contacts));
        return deferred.promise();
    }

    getContactById(id) {
        const deferred = $.Deferred();
        const idNumber = parseInt(id);
        const contact = contacts.value.find(contact => contact.ID === idNumber);
        console.log("Contact::");
        console.log(contact);
        deferred.resolve(this._clone(contact));
        return deferred.promise();
    }

    deleteContact(id) {
        const deferred = $.Deferred();
        const idx = contacts.value.findIndex(contact => contact.ID === id);
        console.log(idx);
        contacts = [...contacts.value.slice(0,idx), ...contacts.value.slice(idx+1)]; 
        deferred.resolve();
        return deferred.promise();
    }

    updateContact(id, contact){
        const deferred = $.Deferred();
        console.log("UpdateContact");
        console.log(contact);
        console.log("ID: " + id);
        const existingContactIndex = contacts.value.findIndex(c => c.ID === id);
        console.log("ExistingContactIndex::" + existingContactIndex);

        contacts.value.splice(existingContactIndex, 1, contact);
        deferred.resolve();
        return deferred.promise();
    }

    newContact(contact) {
        const deferred = $.Deferred();
        contact.ID = this._generateId();
        console.log(contact);
        contacts.value.push(contact);
        deferred.resolve(contact);
        return deferred.promise();
    }

}

export default ContactFormApi;
