import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { myList } from '../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() task:myList={
    myid:1,
    name:"",
    status:false
  };

  @Output() taskDoneEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  triggerEvent(item:myList) {
    this.taskDoneEvent.emit(item);
  }

}
