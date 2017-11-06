import { User } from './user';

export class Activity {

  /**
   * Attributes
   */
  browseLink: String = '';
  content: String = '';
  creationDate: String = new Date().toJSON();
  date: String = '';
  id: String = '';

  owner = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    level: 0,
    profileImage: ''
  };

  privacy: String = '';
  type: String = '';

  /**
   * constructor
   */
  constructor(activity?: any) {
    this.setupActivity(activity);
  }

  /**
   * Setup activity
   */
  setupActivity (activity?: any) {
    this.browseLink = activity ? activity.browseLink : '';
    this.content = activity ? activity.content : '';
    this.creationDate = activity ? activity.creationDate : new Date().toJSON();
    this.date = activity ? activity.date : '';
    this.id = activity ? activity._id : '';
    this.owner = activity ? activity.owner : {};
    this.privacy = activity ? activity.privacy : '';
    this.type = activity ? activity.type : '';
  }

}
