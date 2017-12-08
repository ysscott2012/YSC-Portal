import { GreenTeaObject } from './GreenTeaObject';

export class GreenTeaContainer {

  /* Attributes */
  creationDate: String;
  className: String;
  id: String;
  greenTeaObjects: Array<GreenTeaObject> = [];
  name: String;
  owner: Object;
  privacy: String;
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
      this.name = container.name;
      this.owner = container.owner;
      this.privacy = container.privacy;
      this.referenceID = container.referenceID;
      this.referenceType = container.referenceType;
    } else {
      this.creationDate = new Date().toJSON();
      this.className = '';
      this.id = '';
      this.greenTeaObjects = [];
      this.name = '';
      this.owner = {};
      this.privacy = 'public';
      this.referenceID = '';
      this.referenceType = '';
    }
  }
}
