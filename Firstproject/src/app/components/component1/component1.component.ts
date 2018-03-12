import { Component, OnInit } from '@angular/core';
import {FirstserviceService} from './../../services/firstservice.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  arr=["dhananjay", "Aimaf" , "famia","syeda"];

  newName="";
  constructor(private newService:FirstserviceService) { }

  ngOnInit() {
    console.log(this.newService.success());
    console.log(this.newService.obj);
  }

  namePush = function(){
    if(this.newName!=""){
    this.arr.push(this.newName);
    this.arr.sort();
    }
    this.newName="";
  }

  removeName=function(index){
    this.arr.splice(index,1);
  }

}
