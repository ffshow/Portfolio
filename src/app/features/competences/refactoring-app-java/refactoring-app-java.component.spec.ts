import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactoringAppJavaComponent } from './refactoring-app-java.component';

describe('RefactoringAppJavaComponent', () => {
  let component: RefactoringAppJavaComponent;
  let fixture: ComponentFixture<RefactoringAppJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefactoringAppJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefactoringAppJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
