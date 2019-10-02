import { Component, OnInit } from '@angular/core';
import { IItem } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: IItem[];
  resetFlag = {
    value: false
  };
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        text: 'Never',
        icon: 'date_range'
      },
      {
        text: 'Ocassionally',
        icon: 'date_range'
      },
      {
        text: '4 hours',
        icon: 'date_range'
      },
      {
        text: 'Yearly',
        icon: 'date_range'
      },
      {
        text: 'Never',
        icon: 'date_range'
      }

    ] 
  }

  resetSelector() {
    this.resetFlag = {
      value: true
    };
  }

}
