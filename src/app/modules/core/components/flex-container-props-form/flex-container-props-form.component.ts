import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditStyleComponent } from '../edit-forms-component/edit-style.component';

@Component({
  selector: 'app-flex-container-props-form',
  templateUrl: './flex-container-props-form.component.html',
  styleUrls: ['./flex-container-props-form.component.scss']
})
export class FlexContainerPropsFormComponent extends EditStyleComponent {

  constructor(private formBuilder: FormBuilder) { 
    super();
    this.setStyleForm(this.formBuilder.group({
      alignItems: this.formBuilder.control('', ),
      justifyContent: this.formBuilder.control(''),
    }))
  }
  
}
