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

    // Setup links
    // General links
    let profileLink = new Link('/user/profile/' + user.id, '<i class="fa fa-cog" aria-hidden="true"></i><span>Settings</span>', false);
    let userLink = new Link('/user', '<i class="fa fa-user" aria-hidden="true"></i><span>' + user.firstName + '</span>', false);
    let homeLink = new Link('/user', '<i class="fa fa-user" aria-hidden="true"></i><span>Home</span>', false);
    let groupLink = new Link('', '<i class="fa fa-users" aria-hidden="true"></i><span>Group</span>', false);
    let messageLink = new Link('', '<i class="fa fa-commenting-o" aria-hidden="true"></i><span>Message</span>', false);
    let alertLink = new Link('', '<i class="fa fa-bell-o" aria-hidden="true"></i><span>Alert</span>', false);
    let logoutLink = new Link('/', '<i class="fa fa-sign-out" aria-hidden="true"></i><span>Log out</span>', false);

    // Admin links
    let usersTableLink = new Link('/user/table', '<i class="fa fa-table" aria-hidden="true"></i><span>Manage</span>', true);

    if (argument === 'Mobile') {
      this.links.push(userLink);
      this.links.push(groupLink);
      this.links.push(messageLink);
      this.links.push(alertLink);
      this.links.push(profileLink);
      this.links.push(logoutLink);
    } else if (argument === 'HeaderDropdown') {
      this.links.push(homeLink);
      this.links.push(profileLink);
      this.links.push(logoutLink);
    }

    if (user.level === 99) {
      this.links.push(usersTableLink);
      // this.links.push(usersTableLink);
      // this.links.push(usersTableLink);
    }

  }
}
