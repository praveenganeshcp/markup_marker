import { Injectable } from "@angular/core";
import { BuilderService } from "../services/builder/builder.service";

type FontMeasurableStyleDeclaration = Pick<CSSStyleDeclaration, 'fontSize' | 'fontWeight'>

export class FontMeasurable {
    [x: string]: any;

    constructor() {}

    setFontMeasurableStyles(styleProps: FontMeasurableStyleDeclaration) {
        this?.applyStyles(styleProps);
    }
    getFontMeasurableStyles(): FontMeasurableStyleDeclaration {
        const { fontSize, fontWeight } = this?.getStyles();
        return { fontSize, fontWeight };
    }
}