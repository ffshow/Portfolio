import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionsListComponent } from './features/productions/containers/productions-list/productions-list.component';
//import { AppComponent } from './app.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { PersonnalProjectComponent } from './features/personnal-project/personnal-project.component';
import { MigratComponent } from './features/migrat/migrat.component';
import { AutonomieComponent } from './features/competences/humaines/autonomie/autonomie.component';
import { GestionProjetComponent } from './features/competences/techniques/gestion-projet/gestion-projet.component';
import { DevAppJavaComponent } from './features/competences/techniques/dev-app-java/dev-app-java.component';
import { ForceDePropoComponent } from './features/competences/humaines/force-de-propo/force-de-propo.component';
import { CommunicationComponent } from './features/competences/humaines/communication/communication.component';
import { UmEditorComponent } from './features/um-editor/um-editor.component';
import { UiUxComponent } from './features/competences/techniques/ui-ux/ui-ux.component';
import { CompetenceNavComponent } from './features/competence-nav/competence-nav.component';
import { DevWebComponent } from './features/competences/techniques/dev-web/dev-web.component';
import { HumanCompetenceComponent } from './features/competences/humaines/human-competence/human-competence.component';
import { TechCompComponent } from './features/competences/techniques/tech-comp/tech-comp.component';
import { UserScriptingComponent } from './features/user-scripting/user-scripting.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';

const routes: Routes = [
  {path: '', redirectTo : 'homePage', pathMatch: 'full'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'productions', component: ProductionsListComponent},
  {path: 'competences', component: CompetenceNavComponent},
  {path: 'umEditor', component: UmEditorComponent },
  {path: 'pulpe', component: PersonnalProjectComponent },
  {path: 'migrat', component: MigratComponent },
  {path: 'autonomie', component: AutonomieComponent },
  {path: 'gestionProjet', component: GestionProjetComponent },
  {path: 'devAppJava', component: DevAppJavaComponent },
  {path: 'forcePropo', component: ForceDePropoComponent },
  {path: 'communication', component: CommunicationComponent },
  {path: 'UIUX', component: UiUxComponent },
  {path: 'devWeb', component: DevWebComponent },
  {path: 'humanComp', component: HumanCompetenceComponent},
  {path: 'techComp', component: TechCompComponent},
  {path: 'script', component: UserScriptingComponent},
  {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
