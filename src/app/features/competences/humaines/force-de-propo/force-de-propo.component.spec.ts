import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceDePropoComponent } from './force-de-propo.component';

describe('ForceDePropoComponent', () => {
  let component: ForceDePropoComponent;
  let fixture: ComponentFixture<ForceDePropoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceDePropoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceDePropoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
