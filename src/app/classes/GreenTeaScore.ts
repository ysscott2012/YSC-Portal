export class GreenTeaScore {

  /**
   * Attributes
   */
  creationDate: String;
  className: String;
  id: String;
  owner: Object;
  point: Number;
  referenceID: String;
  referenceType: String;

  /**
   * constructor
   */
  constructor(score?: any) {
    if (score) {
      this.creationDate = score.creationDate;
      this.className = score.className;
      this.id = score._id;
      this.owner = score.owner;
      this.point = score.point;
      this.referenceID = score.referenceID;
      this.referenceType = score.referenceType;

    } else {
      this.creationDate = '';
      this.className = '';
      this.id = '';
      this.owner = '';
      this.point = -1;
      this.referenceID = '';
      this.referenceType = '';
    }
  }
}
