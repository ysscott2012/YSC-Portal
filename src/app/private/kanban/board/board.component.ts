import { Component, OnInit } from '@angular/core';

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

import * as $ from 'jquery';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class KanbanBoardComponent implements OnInit {


  /**
   * Attribute
   */
  boards: GreenTeaContainer[] = [];
  editToggle = false;
  privacy: String[] = [
    webconstant.PRIVACY_PUBLIC,
    webconstant.PRIVACY_PRIVATE
  ];
  selectedPrivacy = 'Privacy';
  selectedBoard: GreenTeaContainer;

  board = {
    name: null,
    validation: false
  };

  enableEditList;
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
    this.getBoards();
  }

  /**
   * Call function based on the result
   * @param result
   */
  action(result) {
    if (result === 'Create Board') {
      this.createBoard();
    }
  }

  /**
   * chagne board selection
   * @param event
   */
  changeboard(event) {
    const selectedID = event.currentTarget.value;
    if (selectedID) {
      const board = this.boards.filter(d => d.id === selectedID)[0];
      this.setSelectedBoard(board);
    }
  }

  /**
   * Change Privacy
   * @param privacy
   */
  changePrivacy(privacy) {
    this.selectedPrivacy = privacy;
  }

  /**
   * Create Board
   */
  createBoard() {
    if (this.validateBoard()) {
      const container = this.setUpContainer(this.board.name);

      this.containerService.save(container).subscribe(
        data => {
          this.userService.token(data);
          if (data.success) {
            const newBoard = new GreenTeaContainer(data.payload);
            this.boards.push(newBoard);
            this.setSelectedBoard(newBoard);
          }
        },
        error => console.log(error)
      );
    }
  }

  /**
   * change board name
   */
  editBaordName(event) {
    if (event.currentTarget.value &&
        event.currentTarget.value !== this.selectedBoard.name &&
        event.keyCode === 13) {
      const con = confirm('Are you sure you want to change board name to '+ event.currentTarget.value + '?');
      if (con) {
        const condition = { '_id': this.selectedBoard.id };
        const update = { name: event.currentTarget.value };
        const option = { new: true };
        this.updateBoard(condition, update, option);
      }
    } else if (event.keyCode === 27) {
      this.editToggle = false;
    } else if (event.currentTarget.value &&
      event.keyCode === 13) {
      this.editToggle = false;
    }
  }
  /**
   * Get Boards under current user
   */
  getBoards() {
    const current: User = this.userService.getCurrent();
    this.containerService.findByReference(
      current.id, // REFERENCE ID
      webconstant.CLASS_NAME_USER // REFERENCE TYPE
    ).subscribe(
      data => {
        this.userService.token(data);
        if (data.success) {
          data.payload.forEach(element => {
            const container = new GreenTeaContainer(element);
            this.boards.push(container);
          });

          if (this.boards.length === 1) {
            this.setSelectedBoard(this.boards[0]);
          }
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
    this.board = { name: null, validation: false}
    this.selectedPrivacy = 'Privacy';
    this.modalService.open(content, ngbModalOptions).result.then((result) => {
      this.action(result);
    }, (reason) => {
    });
  }

  /**
   * remove board
   */
  removeBoard() {
    const con = confirm('Are you sure you want to delete ' + this.selectedBoard.name + ' ?');
    if (con) {
      this.containerService.remove(this.selectedBoard).subscribe(
        data => {
          this.userService.token(data);
          document.location.reload();
        },
        error => console.log(error)
      );
    };
  }

  /**
   * Set up board name
   * @param event
   */
  setBordName(event) {
    this.board.name = event.currentTarget.value;
  }

  /**
   * set up container
   * @param name
   */
  setUpContainer(name): GreenTeaContainer {
    const current: User = this.userService.getCurrent();
    const container = new GreenTeaContainer();
    container.className = webconstant.CLASS_NAME_BOARD;
    container.name = name;
    container.owner = current;
    container.referenceID = current.id;
    container.referenceType = webconstant.CLASS_NAME_USER;
    container.creationDate = new Date().toJSON();
    container.privacy = this.selectedPrivacy;
    container.position = this.boards.length;
    return container;
  }

  /**
   * set up selected board
   * @param board
   */
  setSelectedBoard(board: GreenTeaContainer) {
    this.selectedBoard = board;
    if (board) {
      $('#boardSelections').val(board.id);
    }
  }

  /**
   * validation
   */
  validateBoard() {
    return this.board.name !== '' && this.selectedPrivacy !== 'Privacy';
  }

  /**
   * update board
   * @param condition
   * @param update
   * @param option
   */
  updateBoard(condition, update, option) {
    this.containerService.updateOne(condition, update, option).subscribe(
      data => {
        this.userService.token(data);
        if (data.success) {
          const board = new GreenTeaContainer(data.payload);
          this.boards = this.boards.filter(d => d.id !== board.id);
          this.boards.push(board);
          this.setSelectedBoard(board);
          this.editToggle = false;
        }
      },
      error => console.log(error)
    );
  }

}

