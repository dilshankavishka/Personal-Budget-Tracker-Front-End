import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedService } from '../../SharedService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(public sharedService: SharedService) {}

  isLoggedIn(): boolean {
    return this.sharedService.isLoggedIn();
  }

  logout() {
    this.sharedService.logout();
  }
}
