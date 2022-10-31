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
  @Output() addFruitEvent = new EventEmitter<any>();
  popup = false
  fruitCount = 0

  addFruit(is:any) {
    
    this.addFruitEvent.emit(is);
  }

  updateData(is: any) {

    // this.food.fruit[0].count = this.food.fruit[0].count + Number (event.count);
    this.fruitCount = this.fruitCount+ Number(is.count)
    this.updateDataEvent.emit(is); 
    // alert(is)
    // console.log(30000)
  }
}
