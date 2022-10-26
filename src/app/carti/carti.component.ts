import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carti',
  templateUrl: './carti.component.html',
  styleUrls: ['./carti.component.css']
})
export class CartiComponent implements OnInit {
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
 
  constructor() { 
    console.log("contructor")
  }
  @Input() item =0

  ngOnInit(): void {
    console.log("ngonItnit")

  }
  sayMessage() {
    alert(this.message);
  }
}
