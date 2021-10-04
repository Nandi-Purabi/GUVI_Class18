import { Component } from '@angular/core';
import { myList } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-List';
  startID:number = 3;
  textValue:string = "";

  allTask:Array<myList> = [
    {
      myid: 1,
      name: "A default item",
      status: false
    },
    {
      myid: 2,
      name: "A completed default item",
      status: true
    }
  ];

  addTask() {
    this.allTask.push({ 
      myid: this.startID,
      name: this.textValue, 
      status: false
    });
    this.textValue = "";
    ++this.startID;
  }

  setStatus(item:myList){
    let index = this.allTask.findIndex(e => e.myid == item.myid);
    let currStatus = this.allTask[index].status;
    this.allTask[index].status=!currStatus;
  }

  clearList() {
    this.allTask=this.allTask.filter(obj => !obj.status);
    console.log(this.allTask);
  }
}
