import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app pizzatppizza';

  visible:boolean = false;
  decirAdios()
  {
  	this.visible= false;
  }
}
