module.exports = class Owner {

    constructor(user) {
      this.id = user ? user.id : '';
      this.email = user ? user.email : '';
      this.firstName = user ? user.firstName : '';
      this.lastName = user ? user.lastName : '';
      this.level = user ? user.level : '';
      this.profileImage = user ? user.profileImage : '';
    }
}
