import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWidgetPropsComponent } from './edit-widget-props.component';

describe('EditWidgetPropsComponent', () => {
  let component: EditWidgetPropsComponent;
  let fixture: ComponentFixture<EditWidgetPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWidgetPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWidgetPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
