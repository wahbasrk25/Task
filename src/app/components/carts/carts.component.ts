import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent {


  constructor(private service:UserService, private route:Router){

  }


  myCarts:any ={};
  

  ngOnInit(){

    this.getAllData();
  }



  getAllData(){

      this.service.getData().subscribe(
        (info)=>{

         
          this.myCarts = info;
        }

      )
  }
  



 






}
