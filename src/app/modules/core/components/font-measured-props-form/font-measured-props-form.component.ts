import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Styleable } from '../../interface/styleable';

@Component({
  selector: 'app-font-measured-props-form',
  templateUrl: './font-measured-props-form.component.html',
  styleUrls: ['./font-measured-props-form.component.scss']
})
export class FontMeasuredPropsFormComponent implements OnInit, OnDestroy, Styleable {

  @Input() styleProps: Partial<CSSStyleDeclaration>;
  @Output() applyStyles = new EventEmitter<Partial<CSSStyleDeclaration>>();
  private styleForm: FormGroup;
  private styleFormValueChangesSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) { 
    this.setStyleForm(this.formBuilder.group({
      fontSize: this.formBuilder.control(null),
      fontWeight: this.formBuilder.control(null),
    }))
  }

  ngOnInit(): void {
    this.getStyleForm().setValue(this.styleProps);
    this.styleFormValueChangesSubscription = this.getStyleForm().valueChanges.subscribe(
      changes => {
        this.applyStyles.emit(changes);
      },
      console.error
    )
  }

  ngOnDestroy(): void {
    this.styleFormValueChangesSubscription.unsubscribe();
  }

  setStyleForm(formgroup: FormGroup): void {
    this.styleForm = formgroup;
  }

  getStyleForm(): FormGroup {
    return this.styleForm;
  }

}
