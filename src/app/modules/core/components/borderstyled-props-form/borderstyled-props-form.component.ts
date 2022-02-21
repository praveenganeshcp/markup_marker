import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditStyleComponent } from '../edit-forms-component/edit-style.component';

@Component({
  selector: 'app-borderstyled-props-form',
  templateUrl: './borderstyled-props-form.component.html',
  styleUrls: ['./borderstyled-props-form.component.scss']
})
export class BorderstyledPropsFormComponent extends EditStyleComponent {

  constructor(private formBuilder: FormBuilder) { 
    super();
    this.setStyleForm(this.formBuilder.group({
      borderColor: this.formBuilder.control(''),
      borderWidth: this.formBuilder.control(null),
      borderRadius: this.formBuilder.control(null),
    }))
  }

}
