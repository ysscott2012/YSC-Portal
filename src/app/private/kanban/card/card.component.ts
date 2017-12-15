import { Component, OnInit, Input } from '@angular/core';

// classes
import { GreenTeaContainer } from '../../../classes/GreenTeaContainer';
import { GreenTeaObject } from '../../../classes/GreenTeaObject';
import { User } from '../../../classes/user';

// services
import { ContainerService } from '../../services/container.service';
import { ObjectService } from '../../services/object.service';
import { UserService } from '../../user/services/user.service';

// const
import { webconstant } from '../../../classes/webconstant';

// booststrap
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import * as moment from 'moment';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class KanbanCardComponent implements OnInit {

  /**
   * attributes
   */
  @Input() selectedList: GreenTeaContainer;
  @Input() enableEditList;
  card: GreenTeaObject;
  cards: GreenTeaObject[] = [];
  SelectedList: GreenTeaContainer;
  /**
   * constructor
   */
  constructor(
    private containerService: ContainerService,
    private modalService: NgbModal,
    private objectService: ObjectService,
    private userService: UserService
  ) {
  }

  /**
   * lifecycle
   */
  ngOnInit() {
  }

  /**
   * lifecycle
   */
  ngOnChanges() {
    if (this.selectedList) {
      this.getCards();
      this.SelectedList = this.selectedList;
    }
  }

  /**
   * Call function based on the result
   * @param result
   */
  action(result) {
    if (result === 'Create Card') {
      this.createCard();
    }
  }


  /**
   * convert date picker format to moment
   * @param date
   */
  convertDatePicker(date: any) {
    const m = moment();
    m.set('year', date.year);
    m.set('month', date.month - 1);
    m.set('date', date.day);
    return m.toJSON();
  }

  /**
   * create card
   */
  createCard() {
    if (this.validateCard()) {

      const newObject: GreenTeaObject = this.setUpObject();

      this.objectService.save(newObject).subscribe(
        data => {
          this.userService.token(data);
          if (data.success) {
            const newCard = new GreenTeaObject(data.payload);
            this.cards.push(newCard);
          }
        },
        error => console.log(error)
      );
    }
  }

  /**
   * get cards
   */
  getCards() {
    this.cards = [];
    const referenceID = this.selectedList.id;
    const referenceType = this.selectedList.className;

    this.objectService.findByReference(referenceID, referenceType).subscribe(
      data => {
        this.userService.token(data);
        if (data.success) {
          data.payload.forEach(element => {
            this.cards.push(new GreenTeaObject(element));
          });
        }
      },
      error => console.log(error)
    );
  }

  /**
   * open a dialog
   * @param content
   */
  open(content) {
    const ngbModalOptions: NgbModalOptions = {
      windowClass: 'board-modal',
      size: 'lg'
    };
    this.card = new GreenTeaObject();
    this.modalService.open(content, ngbModalOptions).result.then((result) => {
      this.action(result);
    }, (reason) => {
    });
  }


  /**
   * Set up card name
   * @param event
   */
  setCardName(event) {
    this.card.name = event.currentTarget.value;
  }

  /**
   * set up card description
   */
  setCardDescription(event) {
    this.card.description = event.currentTarget.value;
  }

  /**
   * set up value for task
   * @param event
   */
  setValue(event) {
    this.card.value = event.currentTarget.value;
  }

  /**
   * set up object
   */
  setUpObject() {
    const current: User = this.userService.getCurrent();
    const newObject = new GreenTeaObject(this.card);
    newObject.className = webconstant.CLASS_NAME_CARD;
    newObject.creationDate = new Date().toJSON();
    newObject.endDate = this.convertDatePicker(newObject.endDate);
    newObject.owner = current;
    newObject.position = this.cards.length;
    newObject.startDate = this.convertDatePicker(newObject.startDate);
    newObject.referenceID = this.selectedList.id;
    newObject.referenceType = webconstant.CLASS_NAME_LIST;
    newObject.status = webconstant.STATUS_OPEN;
    return newObject;
  }

  /**
   * valudate card
   */
  validateCard() {
    return this.card.endDate && this.card.startDate && this.card.name && this.card.value;
  }

}
