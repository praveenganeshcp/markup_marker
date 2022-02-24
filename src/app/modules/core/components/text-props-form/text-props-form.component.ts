import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditStyleComponent } from '../edit-forms-component/edit-style.component';

@Component({
  selector: 'app-text-props-form',
  templateUrl: './text-props-form.component.html',
  styleUrls: ['./text-props-form.component.scss']
})
export class TextPropsFormComponent extends EditStyleComponent {

  constructor(private formBuilder: FormBuilder) { 
    super();
    this.setStyleForm(this.formBuilder.group({
      innerText: this.formBuilder.control(''),
    }))
  }

}
