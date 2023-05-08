import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
})
export class DashboardComponent implements OnInit {
  private readonly httpClient = inject(HttpClient);
  application: string;

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000').subscribe((data: any) => {
      this.application = data['application'] as string;
    });
  }
}
