import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { EnumTranslocoLanguage } from 'src/app/transloco.enum';
@Component({
  selector: 'acc-change-language',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NzSelectModule, FormsModule, TranslocoModule],
  template: ` <nz-select
    [ngModel]="EnumTranslocoLanguage.PT"
    (ngModelChange)="changeLanguage($event)"
  >
    <nz-option [nzValue]="EnumTranslocoLanguage.PT" nzLabel="PT"></nz-option>
    <nz-option [nzValue]="EnumTranslocoLanguage.EN" nzLabel="EN"></nz-option>
    <nz-option [nzValue]="EnumTranslocoLanguage.ES" nzLabel="ES"></nz-option>
  </nz-select>`,
})
export class ChangeLanguageComponent {
  readonly translocoService = inject(TranslocoService);
  readonly EnumTranslocoLanguage = EnumTranslocoLanguage;

  changeLanguage = (language: EnumTranslocoLanguage) =>
    this.translocoService.setActiveLang(language);
}
