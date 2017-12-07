import { Link } from "./link";
import { User } from "./user";

export class Navigation {

  /**
   * Attributes
   */
  links = [];

  /**
   * constructor
   */
  constructor(user: User, argument: String) {
    const filePath = '../../assets/files/'
    // Setup links
    // General links
    const profileLink =
      new Link('/user/profile/' + user.id, '<i class="fa fa-cog" aria-hidden="true"></i><span>Settings</span>', 'Settings', '', false);

    const activityLink =
      new Link('/user/activity', '', 'Activity Feed', filePath + 'default/activity.jpg', false);
    const userLink =
      new Link('/user', '<i class="fa fa-user" aria-hidden="true"></i><span>' + user.firstName + '</span>', user.firstName, '', false);
    const dashboardLink =
      new Link('/user', '<i class="fa fa-user" aria-hidden="true"></i><span>Home</span>', 'Dashboard', '', false);

    const groupLink =
      new Link('', '<i class="fa fa-users" aria-hidden="true"></i><span>Group</span>', 'Group', '', false);
    const messageLink =
      new Link('', '<i class="fa fa-commenting-o" aria-hidden="true"></i><span>Message</span>', 'Message', '', false);
    const alertLink =
      new Link('', '<i class="fa fa-bell-o" aria-hidden="true"></i><span>Alert</span>', 'Alert', '', false);
    const logoutLink =
      new Link('/', '<i class="fa fa-sign-out" aria-hidden="true"></i><span>Log out</span>', 'Log out', '', false);

    // Admin links
    const usersTableLink = new Link('/user/pending', '<i class="fa fa-table" aria-hidden="true"></i><span>Manage</span>', 'Manage', filePath + 'default/manage.png', true);

    if (argument === 'Mobile') {
      this.links.push(userLink);
      // this.links.push(groupLink);
      // this.links.push(messageLink);
      // this.links.push(alertLink);
      this.links.push(profileLink);
      this.links.push(logoutLink);
    } else if (argument === 'HeaderDropdown') {
      this.links.push(dashboardLink);
      this.links.push(profileLink);
      this.links.push(logoutLink);
    } else if (argument === 'dashboard') {
      this.links.push(activityLink);
    }

    if (user.level === 99) {
      this.links.push(usersTableLink);
      // this.links.push(usersTableLink);
      // this.links.push(usersTableLink);
    }

  }
}
