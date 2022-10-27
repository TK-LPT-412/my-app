import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  constructor() { }
  @Input() drink: any;

  ngOnInit(): void {
  }

}
