import { FormGroup } from "@angular/forms";

export interface Styleable {
    setStyleForm(formgroup: FormGroup): void;
    getStyleForm(): FormGroup;
}