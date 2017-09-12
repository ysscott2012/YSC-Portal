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

    constructor (user?: User) {
      if (user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.level = user.level;
        this.isApproved = user.isApproved;
        this.isRejected = user.isRejected;
        this.since = user.since;
      }
    }

    /**
     * Get Full Name
     */
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    }

    getSinceDateString() {
      return new Date(this.since.toString()).toLocaleDateString();
    }
}

