import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexContainerPropsFormComponent } from './flex-container-props-form.component';

describe('FlexContainerPropsFormComponent', () => {
  let component: FlexContainerPropsFormComponent;
  let fixture: ComponentFixture<FlexContainerPropsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexContainerPropsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexContainerPropsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
