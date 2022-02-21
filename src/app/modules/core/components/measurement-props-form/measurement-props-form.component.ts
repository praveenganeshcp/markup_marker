import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditStyleComponent } from '../edit-forms-component/edit-style.component';

@Component({
  selector: 'app-measurement-props-form',
  templateUrl: './measurement-props-form.component.html',
  styleUrls: ['./measurement-props-form.component.scss']
})
export class MeasurementPropsFormComponent extends EditStyleComponent {

  constructor(private formBuilder: FormBuilder) { 
    super();
    this.setStyleForm(this.formBuilder.group({
      height: this.formBuilder.control(null),
      width: this.formBuilder.control(null),
    }))
  }

}
