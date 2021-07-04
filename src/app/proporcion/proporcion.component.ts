import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proporcion',
  templateUrl: './proporcion.component.html',
  styleUrls: ['./proporcion.component.css']
})
export class ProporcionComponent implements OnInit {

  getProporcion(value:String) {}

  checkedProperty = true;

  constructor() { }

  ngOnInit(): void {
  }

}
