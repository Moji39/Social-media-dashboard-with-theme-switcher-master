import { Component, OnInit, Input } from '@angular/core';
import { Followers } from 'src/app/interfaces/followers';

@Component({
  selector: 'app-followers-card',
  templateUrl: './followers-card.component.html',
  styleUrls: ['./followers-card.component.scss']
})
export class FollowersCardComponent implements OnInit {
  @Input() follower!: Followers
  @Input() darkMode!: boolean
  
  constructor() { }

  ngOnInit(): void {
  }

  abs_value(num:number):number{
    return Math.abs(num);
  }

}
