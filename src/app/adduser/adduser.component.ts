import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../apiservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  id  : number;
  name : string = " ";
  email : string = " ";
  address : string = "";
  company : string = " ";
   
  

  constructor( private api:ApiserviceService) { }

  ngOnInit() {
  }
  addUser(){
    if(this.api.userlist.length ==0){
      this.id =1 ;
    }
    else{
      this.id = this.api.userlist[this.api.userlist.length-1]['id'] + 1;
    
    }
    if(this.name=="" || this.email=="" ||this.address=="" ||this.company==""){

    }
    else
    {
      this.api.userlist.push({
        "id":this.id,
        "name":this.name,
        "email":this.email,
        "address":this.address,
        "company":this.company,
      })
      this.name ="",
      this.email ="",
        this.address ="",
      this.company =""
    }
  }
  
}
