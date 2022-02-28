import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxShadowPropsFormComponent } from './box-shadow-props-form.component';

describe('BoxShadowPropsFormComponent', () => {
  let component: BoxShadowPropsFormComponent;
  let fixture: ComponentFixture<BoxShadowPropsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxShadowPropsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxShadowPropsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
