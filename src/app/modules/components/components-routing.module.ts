import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KEYWORD_LAYOUT } from 'src/app/app.navigation';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'buttons', component: ButtonsComponent },
      { path: '**', redirectTo: `${KEYWORD_LAYOUT}/dashboard` },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
