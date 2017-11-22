export class Notification {

  /**
   * Attribute
   */
  action: String;
  date: String;
  id: String;
  userID: String;
  userName: String;

  /**
   *  constructor
   */
  constructor(notification?: any) {
    if (notification) {
      this.action = notification.action;
      this.date = notification.date;
      this.id = notification._id;
      this.userID = notification.userID;
      this.userName = notification.userName;
    }
  }
}
