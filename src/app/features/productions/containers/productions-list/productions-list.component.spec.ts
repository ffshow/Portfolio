import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionsListComponent } from './productions-list.component';

describe('ProductionsListComponent', () => {
  let component: ProductionsListComponent;
  let fixture: ComponentFixture<ProductionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
