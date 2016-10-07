if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
            ;
        });
    };
}


class ContactFormApi {
    constructor() {
        this.webUrl = _spPageContextInfo.webAbsoluteUrl;
        this.siteUrl = _spPageContextInfo.siteAbsoluteUrl;
        this.listName = "ContactForm";
        console.log(this.params);
    }

    getAllContacts() {
        const endpoint = String.format("{0}/_api/web/lists/getbytitle('{1}')/items",this.webUrl, this.listName);
        const contacts = $.ajax({
                            url: endpoint,
                            type: "GET",
                            headers: {
                                "Accept" : "application/json;odata=verbose"
                            }
                        });
        contacts.done(function(data){
            return data.d.results;
        });
        contacts.fail(function(error){
            console.log(error);
        })
    }

    getContactById(id) {
        const endpoint = String.format("{0}/_api/web/lists/getbytitle('{1}')/items({2})", this.webUrl, this.listName, id);
        const contact = $.ajax({
                            url: endpoint,
                            type: "GET",
                            headers: {
                                "Accept" : "application/json;odata=verbose"
                            }
                        });
        contact.done(function(data){
            return data.d;
        });
        contact.fail(function(error){
            console.log("getContactById_Error:  " + JSON.stringify(error));
            console.log(error);
        })
    }

    deleteContact(id) {
        const endpoint = String.format("{0}/_api/web/lists/getbytitle('{1}')/items({2})", this.webUrl, this.listName, id);
        const ret = $.ajax({
            url: endpoint,
            type: "POST",
            headers: {
                "X-RequestDigest" : $("#__REQUESTDIGEST").val(),
                "If-Match" : "*",
                "X-HTTP-Method" : "DELETE"
            }
        });
        ret.done(function(){
            return true;
        });
        ret.fail(function(error){
            console.log("deleteContact_Error:  " + JSON.stringify(error));
            return "Error: " + JSON.stringify(error);
        })

    }

    updateContact(id,contact){
        const endpoint = String.format("{0}/_api/web/lists/getbytitle('{1}')/items({2})",this.webUrl, this.listName, id);
        const data = $.ajax({
            url: endpoint,
            type: "POST",
            headers: {
                "accept": "application/json; odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "IF-MATCH": "*",
                "X-Http-Method": "PATCH"
            },
            data: JSON.stringify(data)
        })
        data.done(function(results){
            return results;
        });
        
    }

    newContact(contact) {
        const endpoint = String.format("{0}/_api/web/lists/getbytitle('{1}')/items", this.webUrl, this.listName);
        const type = this.GetItemTypeForListName(this.listName);
        console.log("newContact_endpoint: " + endpoint);
        const data = $.extend({},{
            __metadata: {'type': type}
        }, contact);
        console.log("Data object after merge");
        console.log(JSON.stringify(data));
        const ret = $.ajax({
                        url: endpoint,
                        type: "POST",
                        headers: {
                            "accept": "application/json;odata=verbose",
                            "Content-Type" : "application/json;odata=verbose",
                            "X-RequestDigest": $("#__REQUESTDIGEST").val()
                        },
                        data: JSON.stringify(data)
                    });
        ret.done(function(data){
            console.log("New Item Results: " + JSON.stringify(data));
            return data;
        });
        ret.fail(function(error){
            console.log("New Contact Error: " + JSON.stringify(error));
            return error;
        })
    }

    GetItemTypeForListName(name) {
        return "SP.Data." + name.charAt(0).toUpperCase() + name.slice(1) + "ListItem";
    }

}

export default ContactFormApi;