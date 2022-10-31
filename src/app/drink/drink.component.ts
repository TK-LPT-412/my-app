import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  constructor() { }
  @Input() drink: any;

  ngOnInit(): void {
    this.drinkCount =  this.drink[0].count + this.drink[1].count + this.drink[2].count 

  }
  @Output() updateDataEvent = new EventEmitter<any>();
  drinkCount = 0


  updateData(count: any) {

    // this.food.fruit[0].count = this.food.fruit[0].count + Number (event.count);
    this.drinkCount = this.drinkCount+ Number(count) 
    // alert(is)
    // console.log(30000)
  }

}
