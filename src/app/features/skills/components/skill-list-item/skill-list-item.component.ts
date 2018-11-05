import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../models/Skill';

@Component({
  selector: 'app-skill-list-item',
  templateUrl: './skill-list-item.component.html',
  styleUrls: ['./skill-list-item.component.scss']
})
export class SkillListItemComponent implements OnInit {

  @Input()
  public skill:Skill;

  constructor() { }

  ngOnInit() {
  }

}
