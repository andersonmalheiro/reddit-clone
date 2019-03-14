import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() onSort = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  sort(ordering: string){
    this.onSort.emit(ordering);
  }

}
