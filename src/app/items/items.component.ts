import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
  itemsCount= 0;

  updateData(is: any) {
    this.itemsCount = this.itemsCount + Number(is)
  }
  items = {

    food: {
      fruit:
        [{ name: 'apple', price: 30, count: 10 },
        { name: 'mangoes', price: 20, count: 10 },
        { name: 'Bananas', price: 10, count: 10 }
        ],
      drink:
        [{ name: 'Pepsi', price: 30, count: 10 },
        { name: 'CocaCola', price: 20, count: 10 },
        { name: 'Sprite', price: 10, count: 10 }
        ]
    },
    education: {
      book:
        [{ name: 'Adventure', price: 30, count: 10 },
        { name: 'Horror', price: 20, count: 10 },
        { name: 'Academic', price: 10, count: 10 }
        ],
      dvd:
        [{ name: 'Pepsi', price: 30, count: 10 },
        { name: 'CocaCola', price: 20, count: 10 },
        { name: 'Sprite', price: 10, count: 10 }
        ]
    }
  }
}
