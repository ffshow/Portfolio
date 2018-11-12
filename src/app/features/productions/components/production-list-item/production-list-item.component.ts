import { Component, OnInit, Input } from '@angular/core';
import { Production } from '../../models/Production';

@Component({
  selector: 'app-production-list-item',
  templateUrl: './production-list-item.component.html',
  styleUrls: ['./production-list-item.component.scss']
})
export class ProductionListItemComponent implements OnInit {

  @Input()
  public production: Production;

  constructor() { }

  ngOnInit() {
  }

}
