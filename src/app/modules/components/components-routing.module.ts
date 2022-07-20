import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KEYWORD_LAYOUT } from 'src/app/app.navigation';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsAndBoxesComponent } from './cards-and-boxes/cards-and-boxes.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'buttons', component: ButtonsComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'cards-and-boxes', component: CardsAndBoxesComponent },
      { path: '**', redirectTo: `${KEYWORD_LAYOUT}/dashboard` },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
