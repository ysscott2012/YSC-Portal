import {ILeetcode} from '../interfaces/ILeetcode';

export class Leetcode implements ILeetcode{
  algorithmId: number;
  chapter: string;
  creationTime: string;
  creator: number;
  description: string;
  difficultly: string;
  id: number;
  isDeleted: boolean;
  lastUpdatedTime: string;
  name: string;
  note: string;
  number: number;

  constructor(json?: any) {
    if (json) {
      this.deserialize(json);
    }
  }

  // default() {
  //   this.algorithmId = null;
  //   this.chapter = null;
  //   this.creationTime = null;
  //   this.creator = null;
  //   this.description = null;
  //   this.difficultly = null;
  //   this.id  = null;
  //   this.lastUpdatedTime = null;
  //   this.name = null;
  //   this.note = null;
  //   this.number = null;
  // }

  deserialize(json) {
    this.algorithmId = json.algorithmId;
    this.chapter = json.chapter;
    this.creationTime = json.creationTime;
    this.creator = json.creator;
    this.description = json.description;
    this.difficultly = json.difficultly;
    this.id  = json.id;
    this.lastUpdatedTime = json.lastUpdatedTime;
    this.name = json.name;
    this.note = json.note;
    this.number = json.number;
  }
}
