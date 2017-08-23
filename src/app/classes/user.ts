export class User {
    firstName: String = '';
    lastName: String = '';
    email: String = '';
    password: String = '';
    level: String = '0';
    verified: Boolean = false;
    isApproved: Boolean = false;
    isRejected: Boolean = false;
    since: String = new Date().toJSON();

    constructor () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.level = '0';
        this.verified = false;
        this.isApproved = false;
        this.isRejected = false;
        this.since = new Date().toJSON();
    }
}

