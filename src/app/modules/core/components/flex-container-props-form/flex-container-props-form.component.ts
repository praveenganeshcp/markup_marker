import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Styleable } from '../../interface/styleable';

@Component({
  selector: 'app-flex-container-props-form',
  templateUrl: './flex-container-props-form.component.html',
  styleUrls: ['./flex-container-props-form.component.scss']
})
export class FlexContainerPropsFormComponent implements OnInit, Styleable, OnDestroy {

  @Input() styleProps: Partial<CSSStyleDeclaration>;
  @Output() applyStyles = new EventEmitter<Partial<CSSStyleDeclaration>>();

  private valueChangesSubScription: Subscription;
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
    this.getStyleForm().setValue(this.styleProps);
    this.valueChangesSubScription = this.getStyleForm().valueChanges.subscribe(
      changes => {
        this.applyStyles.emit(changes);
      },
      console.error
    )
  }

  ngOnDestroy(): void {
      this.valueChangesSubScription.unsubscribe();
  }

}
