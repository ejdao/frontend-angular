import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MyPreloadingStrategy } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './presentation/layout/layout.module';
import { EdaButtonModule } from './shared/components/button/button.module';
import { EdaModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  declarations: [AppComponent, EdaModalComponent],
  imports: [
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    EdaButtonModule,
    LayoutModule,
    RouterModule.forRoot([], {
      preloadingStrategy: MyPreloadingStrategy,
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
