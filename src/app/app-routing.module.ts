import { Injectable, NgModule } from '@angular/core';
import { PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { KEYWORD_LAYOUT } from './app.navigation';

const routes: Routes = [
  { path: '', redirectTo: `${KEYWORD_LAYOUT}/dashboard`, pathMatch: 'full' },
  {
    path: `${KEYWORD_LAYOUT}/dashboard`,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: `${KEYWORD_LAYOUT}/components`,
    loadChildren: () =>
      import('./modules/components/components.module').then(m => m.ComponentsModule),
    data: { preload: true },
  },
  { path: '**', redirectTo: `${KEYWORD_LAYOUT}/dashboard`, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

@Injectable({
  providedIn: 'root',
})
export class MyPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>) {
    if (window.location.href.includes(KEYWORD_LAYOUT)) {
      return route.data && route.data['preload'] ? load() : of(null);
    } else {
      return of(null);
    }
  }
}
