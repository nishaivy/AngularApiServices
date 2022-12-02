import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // users:any;
  // constructor(private userdata:UserdataService)
  // {
  //  console.warn("userdata",userdata.users())
  //  this.users[]=userdata.users();
  // }
  userData:any=[{}];
  constructor(private userdataService:UserdataService){
  this.userdataService.getUserData().subscribe(data=>{
    this.userData=data;
    console.log(data);

})
}
}
