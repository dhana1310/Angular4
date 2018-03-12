import { Component } from '@angular/core';
import {FirstserviceService} from './services/firstservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private newService:FirstserviceService){}

  ngOnInit(){
    console.log(this.newService.success());
    console.log(this.newService.obj);
    this.newService.obj.name="Famia";
    this.newService.fetchData();
  }
}
