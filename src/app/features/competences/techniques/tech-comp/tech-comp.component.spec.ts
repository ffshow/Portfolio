import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCompComponent } from './tech-comp.component';

describe('TechCompComponent', () => {
  let component: TechCompComponent;
  let fixture: ComponentFixture<TechCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
