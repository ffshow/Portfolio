import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsListComponent } from './features/skills/containers/skills-list/skills-list.component';

import { ProductionsListComponent } from './features/productions/containers/productions-list/productions-list.component';

const routes: Routes = [
  {path: 'productions', component: ProductionsListComponent},
  {path: 'skills', component: SkillsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
