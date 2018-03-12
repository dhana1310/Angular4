import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  registerForm;
  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstname: new FormControl("",Validators.compose(
                                  [
                                    Validators.required,
                                    Validators.minLength(3),
                                    Validators.pattern('^[a-zA-Z]+$')
                                  ]
                                )),
      lastname:new FormControl("",Validators.compose(
                                  [
                                    Validators.required,
                                    Validators.minLength(3),
                                    Validators.pattern('^[a-zA-Z]+$')
                                  ]
                                )),
      languages:new FormControl("")

    });
  }

  customTestValidator(control){
    //if(control ==="CPP" || control ==="Java" || control ==="Angular"){
      
      if(control.value !='cpp' || control.value !="java" || control.value !="angular"){
        console.log("in custom test validator "+control.value);
        return {'languages':true};
      }
        
   // }
  }

  modelSubmit= function(user){
    console.log("Model Driven Form works");
    console.log(user);
  }

}
