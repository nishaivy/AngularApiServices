import { Component } from '@angular/core';
import {UserdataService} from '../services/userdata.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userData:any=[{}];
  constructor(private userdataService:UserdataService){
  this.userdataService.getUserData().subscribe(data=>{
    this.userData=data;
    console.log(data);

})
}
}
