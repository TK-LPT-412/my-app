import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() fruit : any;
  @Output() updateDataEvent = new EventEmitter<any>();
  
}
