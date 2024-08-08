import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

id:any;
info:any = {};

constructor(private route:ActivatedRoute, private getId:UserService){

  this.id = this.route.snapshot.paramMap.get('id');
  console.log(this.id);
    
}

ngOnInit():void{


  this.getUserById();
   
}



getUserById(){

    this.getId.getDataById(this.id).subscribe(

      (res)=>{

         this.info = res;
      }
    )
}




}
