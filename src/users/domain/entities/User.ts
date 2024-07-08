export class User {
    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public email: string,
        public password: string,
        public role: string,
        public gender: string,
        public phone: string,
        public code: string
    ) {}
}
