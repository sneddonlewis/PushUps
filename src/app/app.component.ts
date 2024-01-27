import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'pu-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent, AddComponent],
  template: `
    <pu-navbar></pu-navbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
