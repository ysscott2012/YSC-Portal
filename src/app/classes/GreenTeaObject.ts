export class GreenTeaObject {

  /**
   * Attributes
   */

  amount: Number;
  className: String;
  creationDate: String;
  description: String;
  endDate: String;
  id: String;
  startDate: String;
  status: String;
  name: String;
  owner: Object;
  value: Number;

  /**
   * constructor
   * @param object
   */
  constructor (object?: any) {
    if (object) {
      this.amount = object.amount;
      this.className = object.className;
      this.creationDate = object.creationDate;
      this.description = object.description;
      this.endDate = object.endDate;
      this.id = object._id;
      this.startDate = object.startDate;
      this.status = object.status;
      this.name = object.name;
      this.owner = object.owner;
      this.value = object.value;
    } else {
      this.amount = -1;
      this.className = '';
      this.creationDate = '';
      this.description = '';
      this.endDate = '';
      this.id = '';
      this.startDate = '';
      this.status = '';
      this.name = '';
      this.owner = {};
      this.value = -1;
    }
  }
}
