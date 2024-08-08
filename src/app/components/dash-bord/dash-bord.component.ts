import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash-bord',
  templateUrl: './dash-bord.component.html',
  styleUrls: ['./dash-bord.component.css']
})
export class DashBordComponent {



  id:any;
  s:any = 0;
  user:any = {};

  
constructor( private myVar:UserService , private route: ActivatedRoute,private ro:Router){

  this.id = this.route.snapshot.paramMap.get('id');
}




ngOnInit():void{

  this.serchById();


}



serchById(){

  
  
 
 this.myVar.getDataById(this.id).subscribe(

    (res)=>{
      
        this.user = res;
        
    }
    
 )
  
}


valed(){

  if(this.s>12 || this.s<1){
     alert('Your id is incorrect please enter correct id');
     this.ro.navigate(['/login']);
  }
}



}
