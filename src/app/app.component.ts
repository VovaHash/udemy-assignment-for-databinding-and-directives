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
    if (this.showParagraph === false) 
    {
      this.showParagraph = true;
    } else {
      this.showParagraph = false;
    }
    
    this.logArray.push(`${event.pageX},${event.pageY}`);
    this.timeLog.push(event.timeStamp)
  }


}
