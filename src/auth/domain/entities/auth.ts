export class Auth {
    constructor(  
        readonly email: string,
        public password: string,
        readonly role: string,
        readonly name: string,
        readonly lastName: string,
        readonly gender: string,
        readonly phone: string,
        readonly code: string
    ) {}
}

