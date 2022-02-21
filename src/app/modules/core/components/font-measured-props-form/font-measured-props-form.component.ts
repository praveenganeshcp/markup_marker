import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditStyleComponent } from '../edit-forms-component/edit-style.component';

@Component({
  selector: 'app-font-measured-props-form',
  templateUrl: './font-measured-props-form.component.html',
  styleUrls: ['./font-measured-props-form.component.scss']
})
export class FontMeasuredPropsFormComponent extends EditStyleComponent {

  constructor(private formBuilder: FormBuilder) { 
    super();
    this.setStyleForm(this.formBuilder.group({
      fontSize: this.formBuilder.control(null),
      fontWeight: this.formBuilder.control(null),
    }))
  }
}
