import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../apiservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private data:ApiserviceService) { }

  ngOnInit() {
    this.data.GetData();
  }
    Delete(id){
      for (var i = 0; i < this.data.userlist.length; i++) {
        if (id == this.data.userlist[i]['id']) {
          this.data.userlist.splice(i, 1);
        }
        
      }

    }
}
