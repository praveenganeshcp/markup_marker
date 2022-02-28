import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditStyleComponent } from '../edit-forms-component/edit-style.component';

@Component({
  selector: 'app-box-shadow-props-form',
  templateUrl: './box-shadow-props-form.component.html',
  styleUrls: ['./box-shadow-props-form.component.scss']
})
export class BoxShadowPropsFormComponent extends EditStyleComponent {

  constructor(private formBuilder: FormBuilder) { 
    super();
    this.setStyleForm(this.formBuilder.group({
      horizontal: this.formBuilder.control(null),
      vertical: this.formBuilder.control(null),
      blur: this.formBuilder.control(null),
      spread: this.formBuilder.control(null),
      color: this.formBuilder.control(''),
    }))
  }

}
