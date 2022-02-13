import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddingPropsFormComponent } from './padding-props-form.component';

describe('PaddingPropsFormComponent', () => {
  let component: PaddingPropsFormComponent;
  let fixture: ComponentFixture<PaddingPropsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaddingPropsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddingPropsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
