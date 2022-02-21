import { Injectable } from "@angular/core";

type FontMeasurableStyleDeclaration = Pick<CSSStyleDeclaration, 'fontSize' | 'fontWeight'>

export class FontMeasurable {
    [x: string]: any;

    constructor() {}

    setFontMeasurableStyles(styleProps: FontMeasurableStyleDeclaration) {
        styleProps.fontSize += 'em';
        this?.applyStyles(styleProps);
    }
    getFontMeasurableStyles(): FontMeasurableStyleDeclaration {
        let { fontSize, fontWeight } = this?.getStyles();
        fontSize = Number(fontSize.split('em')[0])
        return { fontSize, fontWeight };
    }
}