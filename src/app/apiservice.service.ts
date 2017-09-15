import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ApiserviceService {
  name : string = " ";
  email : string = " ";
  address : string = "";
  company : string = " ";
   phoneNumber : string = " ";
  userlist : object[] = [];
  constructor(private http:Http) { }

  GetData(){

    this.userlist = [];

    this.http.get("https://jsonplaceholder.typicode.com/users")

    .subscribe(
      result =>{
        for (var i = 0; i < result.json().length; i++) {
          var user = result.json()[i];
          var userobject = {
            "id" : user.id,
            "name":user.name,
            "address" : user.address.city,
            "email" : user.email,
            "phone" : user.phone,
            "company" : user.company.name ,
          };

          this.userlist.push(userobject);
        }
      },
      error => {
        console.log(error)
      }
    );
  }
  DeleteUser(id) : void {
    
        //this.ToDoListFirebase.remove(key);
        //this.db.object('/mytodo/' + key).remove();
        // this.db.object('/mytodo/' + key).update({ deleted : true });
        
        for (var i = 0; i < this.userlist.length; i++) {
         if (this.userlist[i]["id"] == id) {
            this.userlist[i]["deleted"] = true;
            break;
          }
       }
        
        console.log(this.userlist);
    
        //this.ToDoList[index]["deleted"] = true;
        this.userlist.splice(id, 1);
      }
}
            
        
