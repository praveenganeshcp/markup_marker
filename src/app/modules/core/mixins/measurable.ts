import { Injectable } from "@angular/core";
import { BuilderService } from "../services/builder/builder.service";

type MeasurableStyleDeclaration = Pick<CSSStyleDeclaration, 'height' | 'width'>

export class Measurable {
    [x: string]: any;

    constructor() {}

    setMeasurableStyles(styleProps: MeasurableStyleDeclaration) {
        this?.applyStyles(styleProps);
    }
    getMeasurableStyles(): MeasurableStyleDeclaration {
        const { height, width } = this?.getStyles();
        return { height, width };
    }
}