import { Component, OnInit } from '@angular/core';

// Classes
import { GreenTeaContainer } from '../../../classes/GreenTeaContainer';
import { User } from '../../../classes/user';

// Services
import { ContainerService } from '../../services/container.service';
import { ObjectService } from '../../services/object.service';
import { UserService } from '../../user/services/user.service';

// const
import { webconstant } from '../../../classes/webconstant';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {


  /**
   * Attribute
   */

  /**
   * constructor
   */
  constructor(
    private containerService: ContainerService,
    private objectService: ObjectService,
    private userService: UserService
  ) { }

  /**
   * lifecycle
   */
  ngOnInit() {
  }

  /**
   * listening for the enter key
   */
  keydown(event) {
    if (event.keyCode === 13 &&
        event.currentTarget.value) {
          const container = this.setUpContainer(event.currentTarget.value);
          this.containerService.save(container).subscribe(
            data => {
              console.log(data);
            },
            error => console.log(error)
          );
    }
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
    container.privacy = webconstant.PRIVACY_PUBLIC;
    return container;
  }

}

