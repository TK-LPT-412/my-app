import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'))
   }

  ngOnInit(): void {
  }

  contacts =
    [{ name: 'Fahad', email: 30, no: 10 },
    { name: 'Asad', email: 20, no: 10 },
    { name: 'Hammad', email: 10, no: 10 }
    ]

}
