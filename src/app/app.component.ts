import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My_Project';


  hideColor=true;

  toggle(){
    this.hideColor= !this.hideColor
  }
}
