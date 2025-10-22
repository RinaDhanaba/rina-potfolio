import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rina-portfolio';
  hasProfileImage = false; // Set to true if you have a profile image

  constructor() {}
}
