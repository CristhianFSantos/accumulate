import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule, isDevMode } from '@angular/core';
import {
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TranslocoModule,
  TranslocoService,
  translocoConfig,
} from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { EnumTranslocoLanguage } from './transloco.enum';

export function initTransloco(
  translationLoaderService: TranslocoService
): () => Translation {
  return () =>
    translationLoaderService.getTranslation(EnumTranslocoLanguage.PT);
}

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: [
          EnumTranslocoLanguage.PT,
          EnumTranslocoLanguage.EN,
          EnumTranslocoLanguage.ES,
        ],
        defaultLang: EnumTranslocoLanguage.PT,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ],
})
export class TranslocoRootModule {}
