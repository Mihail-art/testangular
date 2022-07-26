import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  myEvent() {
    console.log('Ghbffff');
    scrollBottom()
  }

}
function scrollBottom() {
  throw new Error('Function not implemented.');
}

