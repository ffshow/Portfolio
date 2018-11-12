import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionListItemComponent } from './production-list-item.component';

describe('ProductionListItemComponent', () => {
  let component: ProductionListItemComponent;
  let fixture: ComponentFixture<ProductionListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
