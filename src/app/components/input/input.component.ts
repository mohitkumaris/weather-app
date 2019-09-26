import { Component, OnInit, Input, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {


  constructor() { }
  cityName: string;
  @Output() changeEvent = new EventEmitter();
  sendCityName(event) {
    this.changeEvent.emit(event);
  }
  ngOnInit() {
  }


}
