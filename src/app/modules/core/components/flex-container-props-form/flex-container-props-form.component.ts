import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Styleable } from '../../interface/styleable';

@Component({
  selector: 'app-flex-container-props-form',
  templateUrl: './flex-container-props-form.component.html',
  styleUrls: ['./flex-container-props-form.component.scss']
})
export class FlexContainerPropsFormComponent implements OnInit, Styleable {

  @Input() styleProps: any;
  private styleForm: FormGroup;

  public getStyleForm(): FormGroup {
      return this.styleForm;
  }

  public setStyleForm(styleForm: FormGroup): void {
      this.styleForm = styleForm;
  }

  constructor(private formBuilder: FormBuilder) { 
    this.setStyleForm(this.formBuilder.group({
      alignItems: this.formBuilder.control('', ),
      justifyContent: this.formBuilder.control(''),
    }))
  }
  
  ngOnInit(): void {
    console.log(this.styleProps);
  }

  saveStyle(): void {
    throw new Error('Method not implemented.');
  }
}
