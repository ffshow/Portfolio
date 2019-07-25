import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScriptingComponent } from './user-scripting.component';

describe('UserScriptingComponent', () => {
  let component: UserScriptingComponent;
  let fixture: ComponentFixture<UserScriptingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserScriptingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserScriptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
