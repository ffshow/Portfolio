import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsListComponent } from './features/skills/containers/skills-list/skills-list.component';
import { ProductionsListComponent } from './features/productions/containers/productions-list/productions-list.component';
//import { AppComponent } from './app.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { MappingComponent } from './features/mapping/mapping.component';
import { PersonnalProjectComponent } from './features/personnal-project/personnal-project.component';
import { MigratComponent } from './features/migrat/migrat.component';
import { AutonomieComponent } from './features/competences/autonomie/autonomie.component';
import { GestionProjetComponent } from './features/competences/gestion-projet/gestion-projet.component';
import { DevAppJavaComponent } from './features/competences/dev-app-java/dev-app-java.component';
import { ForceDePropoComponent } from './features/competences/force-de-propo/force-de-propo.component';
import { CommunicationComponent } from './features/competences/communication/communication.component';
import { UmEditorComponent } from './features/um-editor/um-editor.component';

const routes: Routes = [
  {path: '', redirectTo : 'homePage', pathMatch: 'full'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'productions', component: ProductionsListComponent},
  {path: 'skills', component: SkillsListComponent },
  {path: 'productions/umEditor', component: UmEditorComponent },
  {path: 'productions/mapping', component: MappingComponent },
  {path: 'productions/pulpe', component: PersonnalProjectComponent },
  {path: 'productions/migrat', component: MigratComponent },
  {path: 'productions/migrat/autonomie', component: AutonomieComponent },
  {path: 'productions/migrat/gestionProjet', component: GestionProjetComponent },
  {path: 'productions/migrat/devAppJava', component: DevAppJavaComponent },
  {path: 'productions/migrat/forcePropo', component: ForceDePropoComponent },
  {path: 'productions/migrat/communication', component: CommunicationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
