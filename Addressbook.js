//uc1
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

    get firstName() { return this._firstName; }
    set firstName(firstName) {
    
            this._firstName = firstName;
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
            this._lastName = lastName;
    
    }
    get address() { return this._address; }
    set address(address) {

            this._address = address;
    }


    get city() { return this._city; }
    set city(city) {

            this._city = city;
       
    }

    
    get state() { return this._state; }
    set state(state) {
                    this._state = state;
    
    }

    get zip() { return this._zip; }
    set zip(zip) {
    
            this._zip = zip;
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
            this._phoneNumber = phoneNumber;
    }

    get email() { return this._email; }
    set email(email) {
    
            this._email = email;
    
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