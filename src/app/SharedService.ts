import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private username: string = '';
  private loggedIn: boolean = false;

  setUsername(name: string) {
    this.username = name;
    this.loggedIn = !!name;
  }

  getUsername(): string {
    return this.username;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout() {
    this.username = '';
    this.loggedIn = false;
  }
}
