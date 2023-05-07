import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MyProfileComponent {}
