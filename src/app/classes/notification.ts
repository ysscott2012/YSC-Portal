export class Notification {
  id: String;
  userID: String;
  userName: String;
  date: String;
  action: String;

  /**
   *  constructor
   */
  constructor(notification?: any, includeEverything?: Boolean) {
    if (notification) {
      this.id = notification._id;
      this.userID = notification.userID;
      this.userName = notification.userName;
      this.date = notification.date;
      this.action = notification.action;
    }
  }
}
