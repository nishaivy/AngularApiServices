import { Component,OnInit } from '@angular/core';
import { UserdataService } from './services/userdata.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myRouting';
  // countryData=null;
  // users:any;
  // constructor(private userdata:UserdataService)
  // {
  //  console.warn("userdata",userdata.users())
  //  this.users=userdata.users();
  // }
//   ngOnInit() {
//     this.userdata.getCountries().subscribe((data)=>{
//     this.countryData = data;
// });
//}
// userData:any=[{}];
// constructor(private userdataService:UserdataService){
//   this.userdataService.getUserData().subscribe(data=>{

//     this.userData=data;
//   })

//}
}
