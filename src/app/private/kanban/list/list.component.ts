import { Component, OnInit, Input } from '@angular/core';

// classes
import { GreenTeaContainer } from '../../../classes/GreenTeaContainer';
import { User } from '../../../classes/user';

// services
import { ContainerService } from '../../services/container.service';
import { ObjectService } from '../../services/object.service';
import { UserService } from '../../user/services/user.service';

// const
import { webconstant } from '../../../classes/webconstant';

// booststrao
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kanban-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class KanbanListComponent implements OnInit {

  /**
   * attributes
   */
  @Input() selectedBoard: GreenTeaContainer;

  lists: GreenTeaContainer[] = [];
  selectedList: GreenTeaContainer;

  list = {
    name: null,
    validation: false
  }


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
    this.getLists();
  }

  /**
   * Call function based on the result
   * @param result
   */
  action(result) {
    if (result === 'Create List') {
      this.createList();
    }
  }

  /**
   * Create List
   */
  createList() {
    if (this.validateList()) {

      const container = this.setUpContainer(this.list.name);

      this.containerService.save(container).subscribe(
        data => {
          if (data.success) {
            const newList = new GreenTeaContainer(data.payload);
            this.lists.push(newList);
            this.setSelectedList(newList);
          }
        },
        error => console.log(error)
      );
    }
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
    this.list = { name: null, validation: false}
    this.modalService.open(content, ngbModalOptions).result.then((result) => {
      this.action(result);
    }, (reason) => {
    });
  }

  /**
   * Get Boards under current user
   */
  getLists() {
    this.lists = [];
    this.containerService.findByReference(
      this.selectedBoard.id, // REFERENCE ID
      webconstant.CLASS_NAME_BOARD // REFERENCE TYPE
    ).subscribe(
      data => {
        if (data.success) {
          data.payload.forEach(element => {
            const container = new GreenTeaContainer(element);
            this.lists.push(container);
          });
        }
        console.log(this.lists);
      },
      error => console.log(error)
    );
  }

  /**
   * remove list
   */
  removeList(list) {
    const con = confirm('Are you sure you want to delete ' + list.name + ' ?');
    if (con) {
      this.containerService.remove(list).subscribe(
        data => {
          this.lists = this.lists.filter(d => d.id !== list.id);
        },
        error => console.log(error)
      );
    };
  }


  /**
   * Set up list name
   * @param event
   */
  setListName(event) {
    this.list.name = event.currentTarget.value;
    console.log(this.list.name);
  }

  /**
   * set selectedList
   */
  setSelectedList(list: GreenTeaContainer) {
    this.selectedList = list;
  }

 /**
   * set up container
   * @param name
   */
  setUpContainer(name): GreenTeaContainer {
    const current: User = this.userService.getCurrent();
    const container = new GreenTeaContainer();
    container.className = webconstant.CLASS_NAME_LIST;
    container.name = name;
    container.owner = current;
    container.referenceID = this.selectedBoard.id;
    container.referenceType = webconstant.CLASS_NAME_BOARD;
    container.creationDate = new Date().toJSON();
    container.privacy = webconstant.PRIVACY_PUBLIC;
    container.position = this.lists.length;
    return container;
  }

  /**
   * validation
   */
  validateList() {
    return this.list.name;
  }

}
