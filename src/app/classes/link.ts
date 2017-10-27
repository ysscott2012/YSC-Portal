export class Link {

  url: String = '';
  name: String = '';
  admin: Boolean = false;
  /**
   * constructor
   * @param url
   * @param name
   */
  constructor(url: String, name: String, admin: Boolean) {
    this.url = url;
    this.name = name;
    this.admin = admin;
  }
}
