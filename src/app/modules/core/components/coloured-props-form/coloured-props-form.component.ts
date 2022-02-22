import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditStyleComponent } from '../edit-forms-component/edit-style.component';

@Component({
  selector: 'app-coloured-props-form',
  templateUrl: './coloured-props-form.component.html',
  styleUrls: ['./coloured-props-form.component.scss']
})
export class ColouredPropsFormComponent extends EditStyleComponent {

  constructor(private formBuilder: FormBuilder) { 
    super()
    this.setStyleForm(this.formBuilder.group({
      color: this.formBuilder.control(''),
      backgroundColor: this.formBuilder.control(''),
    }))
  }

}
