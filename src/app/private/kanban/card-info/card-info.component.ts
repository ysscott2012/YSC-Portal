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
  selector: 'app-kanban-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class KanbanCardInfoComponent implements OnInit {

  @Input() selectedCard: GreenTeaObject;
  @Input() selectedList: GreenTeaContainer;
  @Input() position: Number;
  editMode = false;
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
    this.updateCard();
  }

  /**
   * Call function based on the result
   * @param result
   */
  action(result) {
    if (result === 'Delete Card') {
      this.remove();
    } else if (result === 'Discard Card') {
      this.discard();
    } else if (result === 'Edit Card') {
      this.editMode = true;
    } else if (result === 'Save Card') {
      this.updateCard();
      this.editMode = false;
    }
  }

  /**
   * discard changes
   */
  discard() {
    const con = confirm('Leave without saving your changes?');
    if (con) {
      this.editMode = false;
    }
  }

  /**
   * open a dialog
   * @param content
   */
  open(content) {
    this.editMode = false;
    const ngbModalOptions: NgbModalOptions = {
      windowClass: 'board-modal',
      size: 'lg'
    };
    this.modalService.open(content, ngbModalOptions).result.then((result) => {
      this.action(result);
    }, (reason) => {
    });
  }

  /**
   * remove card
   */
  remove() {
    const con = confirm('Are you sure you want to remove this task?');
    if (con) {
      this.objectService.remove(this.selectedCard).subscribe(
        data => {
          this.userService.token(data);
          document.location.reload();
        },
        error => console.log(error)
      );
    }
  }

  /**
   * set data
   * @param event
   * @param element
   */
  setData(event, element) {
    if (element === 'startDate') {
    } else if (element === 'endDate') {
    } else {
      this.selectedCard[element] = event.currentTarget.value;
    }
  }

  /**
   * convert date
   */
  convertDate(date) {
    return new Date(date).toLocaleDateString();
  }

  /**
   * update card information
   */
  updateCard() {
    const condition = { '_id': this.selectedCard.id };
    const update = {
      name: this.selectedCard.name,
      description: this.selectedCard.description,
      value: this.selectedCard.value,
      position: this.position,
      referenceID: this.selectedList.id,
      referenceType: this.selectedList.className
    };
    const option = { new: true };

    this.objectService.updateOne(condition, update, option).subscribe(
      data => {
        this.userService.token(data);
      },
      error => console.log(error)
    );
  }
}
