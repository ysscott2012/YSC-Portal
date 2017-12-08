export class Link {

  /**
   * Attribute
   */
  url: String = '';
  html: String = '';
  name: String = '';
  admin: Boolean = false;
  image: String = '';

  /**
   * constructor
   * @param url
   * @param html
   * @param name
   */
  constructor(
    url: String,
    html: String,
    name: String,
    image: String,
    admin: Boolean
  ) {
    this.url = url;
    this.html = html;
    this.name = name;
    this.image = image;
    this.admin = admin;
  }
}
