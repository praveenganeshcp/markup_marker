import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderstyledPropsFormComponent } from './borderstyled-props-form.component';

describe('BorderstyledPropsFormComponent', () => {
  let component: BorderstyledPropsFormComponent;
  let fixture: ComponentFixture<BorderstyledPropsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderstyledPropsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderstyledPropsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
