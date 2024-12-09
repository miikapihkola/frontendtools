import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { AuthServiceService } from '../services/auth-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  userEmail$: Observable<string>;
  constructor(private authService: AuthServiceService) {
    this.userEmail$ = this.authService.checkLoggedInUser();
  }

  logOut() {
    this.authService.logout();
  }
}
