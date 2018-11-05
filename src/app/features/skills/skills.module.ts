import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsListComponent } from './containers/skills-list/skills-list.component';
import { SkillListItemComponent } from './components/skill-list-item/skill-list-item.component';
import { SkillsService } from './services/skills.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SkillsService
  ],
  declarations: [SkillsListComponent, SkillListItemComponent]
})
export class SkillsModule { }
