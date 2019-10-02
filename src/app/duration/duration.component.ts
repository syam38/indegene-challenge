import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {
  @Input() text = "kjjhkhkh";
  @Input() icon = "date_range";

  constructor() { }

  ngOnInit() {
  }

}
