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
  @Output() updateDataEvent = new EventEmitter<any>();

  foodCount= 0;

  updateData(event: any) {
    console.log(event)
    
    for (let index = 0; index < this.food[event.category].length; index++) {
      if( this.food[event.category][index].name == event.name )
        this.food[event.category][index].count = this.food[event.category][index].count + Number(event.count) 
      
    }

    // this.food[event.category][0] = this.food[event.category].map(function(element:any){
    //    if (element.name == event.name ){
    //     element.count =  element.count + Number(event.count)
    //     return element
    //    }
    // });
    // this.food.fruit[0].count = this.food.fruit[0].count + Number (event.count);
    this.foodCount = this.food.fruit[0].count + this.food.fruit[1].count + this.food.fruit[2].count + this.food.drink[0].count + this.food.drink[1].count + this.food.drink[2].count
    // alert(is)
    // console.log(30000)
    this.updateDataEvent.emit(event.count)
  }
  ngOnInit(): void {
    this.foodCount = this.food.fruit[0].count + this.food.fruit[1].count + this.food.fruit[2].count + this.food.drink[0].count + this.food.drink[1].count + this.food.drink[2].count
    this.updateDataEvent.emit(this.foodCount)

  }

}
