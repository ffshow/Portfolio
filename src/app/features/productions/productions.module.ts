import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionsListComponent } from './containers/productions-list/productions-list.component';
import { ProductionListItemComponent } from './components/production-list-item/production-list-item.component';
import { ProductionsService } from './services/productions.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  providers: [
    ProductionsService
  ],
  declarations: [ProductionsListComponent, ProductionListItemComponent]
})
export class ProductionsModule { }
