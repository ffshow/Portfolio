import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAppJavaComponent } from './dev-app-java.component';

describe('DevAppJavaComponent', () => {
  let component: DevAppJavaComponent;
  let fixture: ComponentFixture<DevAppJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevAppJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevAppJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
