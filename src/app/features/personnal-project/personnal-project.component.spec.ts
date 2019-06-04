import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalProjectComponent } from './personnal-project.component';

describe('PersonnalProjectComponent', () => {
  let component: PersonnalProjectComponent;
  let fixture: ComponentFixture<PersonnalProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
