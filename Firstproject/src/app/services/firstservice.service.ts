import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FirstserviceService {

  constructor(private http:Http) { }

  fetchData(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data) => console.log(data)
    )
  }

  obj ={
    'id':1,
    'name':'Dhananjay'
  }

  success(){
    return "Successful Service";
  }
}
