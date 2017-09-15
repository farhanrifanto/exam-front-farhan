import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AdduserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : '', component :UserlistComponent },
      { path : 'adduser', component :AdduserComponent }
    ])
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
