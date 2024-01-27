import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'pu-navbar',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar,
    MatToolbarRow,
    MatButton
  ],
  templateUrl: 'navbar.component.html',
  styleUrl:  './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {
  }

  navigateHome() {
    this.router.navigate(['/']).then()
  }


  navigateAdd() {
    this.router.navigate(['/add']).then()
  }
}
