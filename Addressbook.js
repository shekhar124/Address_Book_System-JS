//uc2
class AddressBook {
    constructor(...args) {
        this.firstName = args[0];
        this.lastName = args[1];
        this.address = args[2];
        this.city = args[3];
        this.state = args[4];
        this.zip = args[5];
        this.phoneNumber = args[6];
        this.email = args[7];
    }

    get firstName()
     { return this._firstName; }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{3,}$");
        if(nameRegex.test(firstName))
        this._firstName = firstName;
        else
        throw "invalid first name"
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
     let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{3,}$");
     if(nameRegex.test(lastName))
     this._lastName = lastName;
     else
     throw "invalid last name"
    
    }
    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if(addressRegex.test(address))
     this._address = address;
     else
     throw "invalid Address"
    }


    get city() { return this._city; }
    set city(city) {
     let cityRegex = RegExp("^[A-Za-z]{4,}$");
     if (cityRegex.test(city))
     this._city = city;
     else
     throw "Invalid City"
       
    }

    
    get state() { return this._state; }
    set state(state) { 
    let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
    if (stateRegex.test(state))
        this._state = state;
    else
        throw "Invalid state";
    
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[0-9]{3}[ ]*[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "Invalid zip ";
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Invalid phone number";
    }

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid email";
    }

    toString() {
        return "\nName: " + this.firstName + " " + this.lastName +
                "\nAddress: " + this.address +
                "\nCity: " + this.city +
                "\nState: " + this.state +
                "\nZip: " + this.zip +
                "\nPhone Number: " + this.phoneNumber +
                "\nEmail: " + this.email;
    }
}

let contactArray = new Array();
contactArray.push(new AddressBook("Raja","Shekhar","Kodimial","Kariminagar","Telangana","505501","91 9573359776","shekharchinna@gmail.com"));
console.log(contactArray);
contactArray.forEach((contact)=>console.log(contact.toString()));