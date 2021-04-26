export class User {
    constructor(
        _id: Number,
        public firstName: string,
        public lastName: string,
        public emailId: string,
        password: string,
        public dob: Date,
        public phone: string,
        public address: string,
        public funds: number,
        public orders: Array<any>,
        public userLocked: Boolean, 
        public userId: string
        ) { }
}