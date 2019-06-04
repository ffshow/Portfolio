import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScriptingCatalogComponent } from './user-scripting-catalog.component';

describe('UserScriptingCatalogComponent', () => {
  let component: UserScriptingCatalogComponent;
  let fixture: ComponentFixture<UserScriptingCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserScriptingCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserScriptingCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
