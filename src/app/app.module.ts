import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MyPreloadingStrategy } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './presentation/layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot([], {
      preloadingStrategy: MyPreloadingStrategy,
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
