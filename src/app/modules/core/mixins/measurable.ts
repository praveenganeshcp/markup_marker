import { Injectable } from "@angular/core";
import { BuilderService } from "../services/builder/builder.service";

type MeasurableStyleDeclaration = Pick<CSSStyleDeclaration, 'height' | 'width'>

@Injectable()
export class Measurable {

    constructor(private builderService: BuilderService) {}

    setMeasurableStyles(styleProps: MeasurableStyleDeclaration) {
        this.builderService.getEditWidget().applyStyles(styleProps);
    }
    getMeasurableStyles(): MeasurableStyleDeclaration {
        const { height, width } = this.builderService.getEditWidget().getStyles();
        return { height, width };
    }
}