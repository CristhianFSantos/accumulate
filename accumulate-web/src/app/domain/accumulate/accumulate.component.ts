import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { ChangeLanguageComponent } from 'src/app/widget/components/change-language/change-language.component';

@Component({
  templateUrl: './accumulate.component.html',
  styleUrls: ['./accumulate.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslocoModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ChangeLanguageComponent,
    NzToolTipModule,
    NzButtonModule,
    RouterModule,
  ],
})
export class AccumulateComponent implements OnInit {
  private readonly router = inject(Router);
  isCollapsed = false;
  ngOnInit(): void {
    this.router.navigate(['/accumulate/dashboard']);
  }
  logout = (): Promise<boolean> => this.router.navigate(['/auth/login']);
}
