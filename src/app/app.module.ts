import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SkillsModule } from './features/skills/skills.module';
import { RouterModule } from '@angular/router';
import { ProductionsModule } from './features/productions/productions.module';
import { HomePageComponent } from './features/home-page/home-page.component';
import { MappingComponent } from './features/mapping/mapping.component';
import { PersonnalProjectComponent } from './features/personnal-project/personnal-project.component';
import { MigratComponent } from './features/migrat/migrat.component';
import { CommunicationComponent } from './features/competences/communication/communication.component';
import { ForceDePropoComponent } from './features/competences/force-de-propo/force-de-propo.component';
import { AutonomieComponent } from './features/competences/autonomie/autonomie.component';
import { GestionProjetComponent } from './features/competences/gestion-projet/gestion-projet.component';
import { DevAppJavaComponent } from './features/competences/dev-app-java/dev-app-java.component';
import { UmEditorComponent } from './features/um-editor/um-editor.component';
import { RefactoringAppJavaComponent } from './features/competences/refactoring-app-java/refactoring-app-java.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MappingComponent,
    PersonnalProjectComponent,
    MigratComponent,
    CommunicationComponent,
    ForceDePropoComponent,
    AutonomieComponent,
    GestionProjetComponent,
    DevAppJavaComponent,
    UmEditorComponent,
    RefactoringAppJavaComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    SkillsModule,
    ProductionsModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
