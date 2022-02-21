import { Injectable } from "@angular/core";

type MeasurableStyleDeclaration = Pick<CSSStyleDeclaration, 'height' | 'width'>

export class Measurable {
    [x: string]: any;

    constructor() {}

    setMeasurableStyles(styleProps: MeasurableStyleDeclaration) {
        styleProps.height += '%';
        styleProps.width += '%';
        this?.applyStyles(styleProps);
    }
    getMeasurableStyles(): MeasurableStyleDeclaration {
        let { height, width } = this?.getStyles();
        height = Number(height.split('%')[0]);
        width = Number(width.split('%')[0]);
        return { height, width };
    }
}