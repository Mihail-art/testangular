import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  display: boolean = false;

  constructor() { }

  menuHome = 'Home';
  menuAbout = 'About Us';
  menuDo = 'What We Do';
  menuContact = 'Contacts Us';
  history = 'Our history';
  contacnButton = 'Contact us';
  trainingMenu = 'Training and Implementation';
  consultantButton = 'Cyber Consultants';
  protectButton = 'Consultancy and brand protection';
  softwareButton = 'Software';


  showMenu = false;

  menuOpen(){
    this.showMenu = true;
  }

  
  menuClose(){
    this.showMenu = false;
  }


}
