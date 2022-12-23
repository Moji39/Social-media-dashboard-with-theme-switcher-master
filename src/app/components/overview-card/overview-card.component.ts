import { Component, OnInit, Input } from '@angular/core';
import { Overviews } from 'src/app/interfaces/overviews';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent implements OnInit {
  @Input() overview!: Overviews
  @Input() darkMode!: boolean
  
  constructor() { }

  ngOnInit(): void {
  }

  abs_value(num:number){
    return Math.abs(num);
  }
}
