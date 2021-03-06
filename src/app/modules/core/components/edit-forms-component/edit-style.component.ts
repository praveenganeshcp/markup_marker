import { Directive, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { Styleable } from "../../interface/styleable";

@Directive()
export class EditStyleComponent implements Styleable, OnInit, OnChanges, OnDestroy {

    @Input() props: Partial<CSSStyleDeclaration>;
    @Output() applyChanges = new EventEmitter<Partial<CSSStyleDeclaration>>();
    private valueChangesSubScription: Subscription;

    private styleForm: FormGroup;

    setStyleForm(formgroup: FormGroup): void {
        this.styleForm = formgroup;
    }
    getStyleForm(): FormGroup {
        return this.styleForm;
    }

    ngOnInit(): void {
        this.getStyleForm().setValue(this.props);
        this.valueChangesSubScription = this.getStyleForm().valueChanges.subscribe(
          changes => {
            this.applyChanges.emit(changes);
          },
          console.error
        )
    }

    ngOnChanges(changes: SimpleChanges): void {
        const styleChanges: SimpleChange = changes.props;
        this.getStyleForm().setValue(styleChanges.currentValue);
    }

    ngOnDestroy(): void {
        this.valueChangesSubScription.unsubscribe();
    }
    
}