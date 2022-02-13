import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColouredPropsFormComponent } from './coloured-props-form.component';

describe('ColouredPropsFormComponent', () => {
  let component: ColouredPropsFormComponent;
  let fixture: ComponentFixture<ColouredPropsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColouredPropsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColouredPropsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
