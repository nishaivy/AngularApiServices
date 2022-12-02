import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  // constructor(private http:HttpClient) { }
  // getCountries(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  //   }
  // users(){
  //   return [
  //     {name:'Nisha',age:22,emailid:'nisha@gmail.com'},
  //     {name:'Sanjana',age:11,emailid:'sanjana@gmail.com'},
  //     {name:'Rohit',age:34,emailid:'rohit@gmail.com'}]
  // }
  constructor(private http:HttpClient){}
  getUserData(){
    //let apiurl='https://jsonplaceholder.typicode.com/users';
    let apiurl='https://reqres.in/api/users';
    return this.http.get(apiurl);
  }
}
