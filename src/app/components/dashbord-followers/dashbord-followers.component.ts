import { Component, OnInit,Input } from '@angular/core';
import { Followers } from '../../interfaces/followers';

@Component({
  selector: 'app-dashbord-followers',
  templateUrl: './dashbord-followers.component.html',
  styleUrls: ['./dashbord-followers.component.scss']
})
export class DashbordFollowersComponent implements OnInit {
  followers!: Followers[];
  @Input() darkMode!:boolean
  
  constructor() { }

  ngOnInit(): void {
    this.followers = [
      {
        social: 'facebook',
        pseudo: '@nathanf',
        followers_nbr: '1987',
        today_followers: 12
      },
      {
        social: 'twitter',
        pseudo: '@nathanf',
        followers_nbr: '1044',
        today_followers: 99
      },
      {
        social: 'instagram',
        pseudo: '@realnathanf',
        followers_nbr: '11k',
        today_followers: 1099
      },
      {
        social: 'youtube',
        pseudo: 'Nathan F.',
        followers_nbr: '8239',
        today_followers: -144
      }
    ]
  }

}
