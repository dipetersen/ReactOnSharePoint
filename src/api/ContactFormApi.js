class ContactFormApi {
    constructor() {
        this.webUrl = _spPageContextInfo.webAbsoluteUrl;
        this.siteUrl = _spPageContextInfo.siteAbsoluteUrl;
        this.listName = "ContactForm";
        console.log("webUrl: " + this.webUrl);
        console.log("siteUrl: " + this.siteUrl);
        console.log("listName: " + this.listName);
    }

    getAllContacts() {
        const endpoint = `${this.webUrl}/_api/web/lists/getbytitle('${this.listName}')/items`;
        console.log("Endpoint: " + endpoint);
        console.log("making ajax call");
        return $.ajax({
            url : endpoint,
            type: "GET",
            headers : {
                "accept" : "application/json;odata=nometadata"
            }
        })
    }

    getContactById(id) {
        const endpoint = `${this.webUrl}/_api/web/lists/getbytitle('${this.listName}')/items(${id})`;
        console.log("getContactById");
        console.log(endpoint);
        return $.ajax({
            url : endpoint,
            type: "GET",
            headers : {
                "accept" : "application/json;odata=nometadata"
            }
        })
    }

    deleteContact(id) {
        const endpoint = `${this.webUrl}/_api/web/lists/getbytitle('${this.listName}')/items(${id})`;
        return $.ajax({
            url: endpoint,
            type: "POST",
            headers: {
                "X-RequestDigest" : $("#__REQUESTDIGEST").val(),
                "If-Match" : "*",
                "X-HTTP-Method" : "DELETE"
            }
        });

    }

    updateContact(id,contact){
        const endpoint = `${this.webUrl}/_api/web/lists/getbytitle('${this.listName}')/items(${id})`;
        return $.ajax({
            url: endpoint,
            type: "POST",
            headers: {
                "accept": "application/json",
                "content-type":"application/json;odata=nometadata",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "IF-MATCH": "*",
                "X-Http-Method": "PATCH"
            },
            data: JSON.stringify(contact)
        })
    }

    newContact(contact) {
        const endpoint = `${this.webUrl}/_api/web/lists/getbytitle('${this.listName}')/items`;
        console.log("newContact_endpoint: " + endpoint);
        console.log("newContact Data");
        console.log(contact);
        return $.ajax({
            url: endpoint,
            type: "POST",
            headers: {
                "accept": "application/json",
                "content-type":"application/json;odata=nometadata",
                "X-RequestDigest": $("#__REQUESTDIGEST").val()
            },
            data: JSON.stringify(contact)
        });
    }

    GetItemTypeForListName(name) {
        return "SP.Data." + name.charAt(0).toUpperCase() + name.slice(1) + "ListItem";
    }

}

export default ContactFormApi;