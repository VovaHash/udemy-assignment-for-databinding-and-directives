import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showParagraph = false;
  logArray = [];
  timeLog =[];

  onClick(event : any){

    this.showParagraph = !this.showParagraph;
    
    this.logArray.push(`${event.pageX},${event.pageY}`);
    this.timeLog.push(event.timeStamp)
  }

  // for the databinding task

  username = '';

  resetUsername(){
    this.username='';
  }


}
