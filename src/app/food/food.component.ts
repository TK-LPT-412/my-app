import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { elementAt, map } from 'rxjs';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor() { }
  @Input() food: any;
  @Output() updateItemEvent = new EventEmitter<any>();
  @Output() addItemEvent = new EventEmitter<any>();


  foodCount= 0;

  addFruitOf(is:any) {
    this.addItemEvent.emit(is)
  }

  updateDataOf(event: any) {
    console.log(event)
    
    this.food.fruit.map(function (element: any) {
      if (element.name == event.name) {
        element.count = element.count + Number(event.count);
      }
      return element
    })

    this.foodCount = this.food.fruit[0].count + this.food.fruit[1].count + this.food.fruit[2].count + this.food.drink[0].count + this.food.drink[1].count + this.food.drink[2].count
    this.updateItemEvent.emit(event.count)
  }
  ngOnInit(): void {
    this.foodCount = this.food.fruit[0].count + this.food.fruit[1].count + this.food.fruit[2].count + this.food.drink[0].count + this.food.drink[1].count + this.food.drink[2].count
    this.updateItemEvent.emit(this.foodCount)

  }

}
