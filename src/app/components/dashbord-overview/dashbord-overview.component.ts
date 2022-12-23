import { Component, OnInit, Input} from '@angular/core';
import { Overviews } from 'src/app/interfaces/overviews';

@Component({
  selector: 'app-dashbord-overview',
  templateUrl: './dashbord-overview.component.html',
  styleUrls: ['./dashbord-overview.component.scss']
})
export class DashbordOverviewComponent implements OnInit {
  overviews!: Overviews[]
  @Input() darkMode!:boolean

  constructor() { }

  ngOnInit(): void {
    this.overviews = [
      {
        title: 'Page Views',
        social: 'facebook',
        overview_nbr: '87',
        overview_percentage: 3
      },
      {
        title: 'Likes',
        social: 'facebook',
        overview_nbr: '52',
        overview_percentage: -2
      },
      {
        title: 'Likes',
        social: 'instagram',
        overview_nbr: '5462',
        overview_percentage: 2257
      },
      {
        title: 'Profile Views',
        social: 'instagram',
        overview_nbr: '52k',
        overview_percentage: 1375
      },
      {
        title: 'Retweets',
        social: 'twitter',
        overview_nbr: '117',
        overview_percentage: 303
      },
      {
        title: 'Likes',
        social: 'twitter',
        overview_nbr: '507',
        overview_percentage: 553
      },
      {
        title: 'Likes',
        social: 'youtube',
        overview_nbr: '107',
        overview_percentage: -19
      },
      {
        title: 'Total Views',
        social: 'youtube',
        overview_nbr: '1407',
        overview_percentage: -12
      }
    ]
  }

}
