import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { Observable } from 'rxjs';
import { Skill } from '../../models/Skill';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {

  constructor(private skillsService: SkillsService) { }
  public skills$: Observable<Skill[]>;

  ngOnInit() {
    this.skills$ = this.skillsService.getAll$();
  }

}
