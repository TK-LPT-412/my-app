import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data = {username: 'hammad', password: 123};
  popup = true

  loginUser(is:any){
   
    if(is.name == this.data.username) {
      this.popup  = false
    }


  }




}
