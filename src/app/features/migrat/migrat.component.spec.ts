import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigratComponent } from './migrat.component';

describe('MigratComponent', () => {
  let component: MigratComponent;
  let fixture: ComponentFixture<MigratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
