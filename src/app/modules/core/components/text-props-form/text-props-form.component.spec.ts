import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPropsFormComponent } from './text-props-form.component';

describe('TextPropsFormComponent', () => {
  let component: TextPropsFormComponent;
  let fixture: ComponentFixture<TextPropsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextPropsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPropsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
