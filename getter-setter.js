// important for login systems

class users{
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    get password(){
        return `The password is ${this.__password.toUpperCase()}${this.name} ` ; // the password got encrypted
    }
    set password(value){
        this.__password = value.toUpperCase() ;
    }
}

let puki = new users("puki", "12345abcd")

console.log(puki.password)