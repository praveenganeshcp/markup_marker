import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementPropsFormComponent } from './measurement-props-form.component';

describe('MeasurementPropsFormComponent', () => {
  let component: MeasurementPropsFormComponent;
  let fixture: ComponentFixture<MeasurementPropsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementPropsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementPropsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
