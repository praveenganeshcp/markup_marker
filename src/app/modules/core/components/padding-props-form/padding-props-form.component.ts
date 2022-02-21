import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditStyleComponent } from '../edit-forms-component/edit-style.component';

@Component({
  selector: 'app-padding-props-form',
  templateUrl: './padding-props-form.component.html',
  styleUrls: ['./padding-props-form.component.scss']
})
export class PaddingPropsFormComponent extends EditStyleComponent {

  constructor(private formBuilder: FormBuilder) { 
    super();
    this.setStyleForm(this.formBuilder.group({
      paddingLeft: this.formBuilder.control(null),
      paddingRight: this.formBuilder.control(null),
      paddingTop: this.formBuilder.control(null),
      paddingBottom: this.formBuilder.control(null),
    }))
  }
}
