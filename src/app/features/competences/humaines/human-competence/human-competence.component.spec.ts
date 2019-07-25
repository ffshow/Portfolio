import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanCompetenceComponent } from './human-competence.component';

describe('HumanCompetenceComponent', () => {
  let component: HumanCompetenceComponent;
  let fixture: ComponentFixture<HumanCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
