import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMappingCatalogComponent } from './user-mapping-catalog.component';

describe('UserMappingCatalogComponent', () => {
  let component: UserMappingCatalogComponent;
  let fixture: ComponentFixture<UserMappingCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMappingCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMappingCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
