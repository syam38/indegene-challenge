import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit, OnChanges {
  @Input() reset;
  defaultSeletedValue: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.reset && this.reset.value) {
      this.defaultSeletedValue = 'Less Relevant';
    } else {
      this.defaultSeletedValue = undefined;
    }
  }

}
