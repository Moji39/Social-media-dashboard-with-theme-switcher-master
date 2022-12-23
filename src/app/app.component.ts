import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang';
  darkMode:boolean = false
  
  isDark(darkMode:boolean){
    this.darkMode = darkMode
    if(this.darkMode === true) document.getElementsByTagName('body')[0].classList.add('dark-mode')
    if(this.darkMode === false) document.getElementsByTagName('body')[0].classList.remove('dark-mode')
  }
}
