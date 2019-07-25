import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { ProductionsModule } from './features/productions/productions.module';
import { HomePageComponent } from './features/home-page/home-page.component';
import { PersonnalProjectComponent } from './features/personnal-project/personnal-project.component';
import { MigratComponent } from './features/migrat/migrat.component';
import { CommunicationComponent } from './features/competences/humaines/communication/communication.component';
import { ForceDePropoComponent } from './features/competences/humaines/force-de-propo/force-de-propo.component';
import { AutonomieComponent } from './features/competences/humaines/autonomie/autonomie.component';
import { GestionProjetComponent } from './features/competences/techniques/gestion-projet/gestion-projet.component';
import { DevAppJavaComponent } from './features/competences/techniques/dev-app-java/dev-app-java.component';
import { UmEditorComponent } from './features/um-editor/um-editor.component';
import { UiUxComponent } from './features/competences/techniques/ui-ux/ui-ux.component';
import { CompetenceNavComponent } from './features/competence-nav/competence-nav.component';
import { DevWebComponent } from './features/competences/techniques/dev-web/dev-web.component';
import { HumanCompetenceComponent } from './features/competences/humaines/human-competence/human-competence.component';
import { TechCompComponent } from './features/competences/techniques/tech-comp/tech-comp.component';
import { UserScriptingComponent } from './features/user-scripting/user-scripting.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PersonnalProjectComponent,
    MigratComponent,
    CommunicationComponent,
    ForceDePropoComponent,
    AutonomieComponent,
    GestionProjetComponent,
    DevAppJavaComponent,
    UmEditorComponent,
    UiUxComponent,
    CompetenceNavComponent,
    DevWebComponent,
    HumanCompetenceComponent,
    TechCompComponent,
    UserScriptingComponent,
    PortfolioComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    ProductionsModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
