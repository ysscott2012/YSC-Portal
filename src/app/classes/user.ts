export class User {
    firstName: String = "";
    lastName: String = "";
    email: String = "";
    password: String = "";
    userRole: Number = 0;
    verified: Boolean = false;

    constructor () {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.userRole = 0;
        this.verified = false;
    }
}
