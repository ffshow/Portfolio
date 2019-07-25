import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceNavComponent } from './competence-nav.component';

describe('CompetenceNavComponent', () => {
  let component: CompetenceNavComponent;
  let fixture: ComponentFixture<CompetenceNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
