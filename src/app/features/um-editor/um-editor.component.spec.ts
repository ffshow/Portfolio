import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmEditorComponent } from './um-editor.component';

describe('UmEditorComponent', () => {
  let component: UmEditorComponent;
  let fixture: ComponentFixture<UmEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
