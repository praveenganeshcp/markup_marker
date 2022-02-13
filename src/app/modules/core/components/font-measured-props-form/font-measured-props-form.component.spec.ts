import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontMeasuredPropsFormComponent } from './font-measured-props-form.component';

describe('FontMeasuredPropsFormComponent', () => {
  let component: FontMeasuredPropsFormComponent;
  let fixture: ComponentFixture<FontMeasuredPropsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontMeasuredPropsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontMeasuredPropsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
