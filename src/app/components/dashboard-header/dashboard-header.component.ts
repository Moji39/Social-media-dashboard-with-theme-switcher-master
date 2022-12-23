import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  darkMode: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'before';
  @Output() onToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.darkMode = !this.darkMode;
    this.onToggle.emit(this.darkMode);
  }
}
