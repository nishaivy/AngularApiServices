import { Component } from '@angular/core';
import {UserdataService} from '../services/userdata.service'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  userData:any=[{}];
  constructor(private userdataService:UserdataService){
  this.userdataService.getUserData().subscribe(data=>{
    this.userData=data;
    console.log(data);

})
}
}
