import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './landingPage.component.html',
  styleUrl: './landingPage.component.scss',
})
export class LandingPageComponent {}
