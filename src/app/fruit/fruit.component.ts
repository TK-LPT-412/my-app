import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.fruitCount =  this.fruit[0].count + this.fruit[1].count + this.fruit[2].count 
  }
  @Input() fruit : any;
  @Output() updateDataEvent = new EventEmitter<any>();
  fruitCount = 0


  updateData(count: any) {

    // this.food.fruit[0].count = this.food.fruit[0].count + Number (event.count);
    this.fruitCount = this.fruitCount+ Number(count) 
    // alert(is)
    // console.log(30000)
  }
}
