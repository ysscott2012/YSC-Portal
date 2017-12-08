import { GreenTeaObject } from './GreenTeaObject';

export class GreenTeaContainer {

  /* Attributes */
  creationDate: String;
  className: String;
  id: String;
  greenTeaObjects: Array<GreenTeaObject> = [];
  owner: Object;
  referenceID: String;
  referenceType: String;

  /**
   * constructor
   */
  constructor (container?: any) {

    if (container) {
      this.creationDate = container.creationDate;
      this.className = container.className;
      this.id = container.id;
      container.greenTeaObjects.forEach(element => {
        const greenTeaObject = new GreenTeaObject(element);
        this.greenTeaObjects.push(greenTeaObject);
      });
      this.owner = container.owner;
      this.referenceID = container.referenceID;
      this.referenceType = container.referenceType;
    } else {
      this.creationDate = '';
      this.className = '';
      this.id = '';
      this.greenTeaObjects = [];
      this.owner = {};
      this.referenceID = '';
      this.referenceType = '';
    }
  }
}
