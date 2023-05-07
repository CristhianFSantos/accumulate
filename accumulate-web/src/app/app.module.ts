import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoService } from '@ngneat/transloco';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { TranslocoRootModule, initTransloco } from './transloco-root.module';
registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    TranslocoRootModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: APP_INITIALIZER,
      useFactory: initTransloco,
      deps: [TranslocoService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
