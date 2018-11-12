import { Component, OnInit } from '@angular/core';
import { ProductionsService } from '../../services/productions.service';
import { Observable } from 'rxjs';
import { Production } from '../../models/Production';

@Component({
  selector: 'app-productions-list',
  templateUrl: './productions-list.component.html',
  styleUrls: ['./productions-list.component.scss']
})
export class ProductionsListComponent implements OnInit {

  constructor(private productionsService: ProductionsService) { }
  public productions$: Observable<Production[]>;

  ngOnInit() {
    this.productions$ = this.productionsService.getAll$();
  }



}
