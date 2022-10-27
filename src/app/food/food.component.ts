import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor() { }
  @Input() food: any;
  @Output() updateDataEvent = new EventEmitter<any>();

  foodCount= 0;

  updateData(is: any) {
    this.food.fruit[0].count = this.food.fruit[0].count + Number (is);
    this.foodCount = this.food.fruit[0].count + this.food.fruit[1].count + this.food.fruit[2].count
    // alert(is)
    // console.log(30000)
    this.updateDataEvent.emit(is)
  }
  ngOnInit(): void {
    this.foodCount = this.food.fruit[0].count + this.food.fruit[1].count + this.food.fruit[2].count
    this.updateDataEvent.emit(this.foodCount)

  }

}
