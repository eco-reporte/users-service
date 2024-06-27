import { v4 as uuid } from "uuid";

export class User {
    public id: number;
    public name: string;
    public lastname: string;
    public phone: number;
    public email: string;
    public birthday: string;
    public password: string;

    constructor(id:number,name: string, lastname: string,phone: number,email: string,birthday: string, password: string) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.birthday = birthday;
        this.password = password;
    }

}


