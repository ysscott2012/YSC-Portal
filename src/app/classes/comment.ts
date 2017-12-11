
import { Activity } from './activity';

export class Comment {

  /**
   * Attributes
   */
  public id: String = '';
  public referenceID: String = '';
  public referenceType: String = '';
  public content: String = '';
  public creationDate: String = '';
  public tag: String[] = [];
  public className: String = 'comment';

  public owner = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    level: 0,
    profileImage: ''
  };

  /**
   * constructor
   */
  constructor(comment?: any) {
    if (comment) {
      this.id = comment._id;
      this.referenceID = comment.referenceID;
      this.referenceType = comment.referenceType;
      this.content = comment.content;
      this.creationDate = comment.creationDate;
      this.tag = comment.tag;
      this.className = comment.className;
      this.owner = comment.owner;
    }
  }

  /**
   * setup comment by activity
   * @param activity
   * @param content
   * @param creationDate
   */
  setUpCommentByActivity (activity: Activity, content, creationDate) {
    this.referenceID = activity.id;
    this.referenceType = activity.className;
    this.content = content;
    this.creationDate = creationDate;
  }

}
