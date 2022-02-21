import { Injectable } from "@angular/core";

type BorderStyleableStyleDeclaration = Pick<CSSStyleDeclaration, 'borderWidth' | 'borderColor' | 'borderRadius'>

export class BorderStyleable {
    [x: string]: any;
    constructor() {}

    setBorderStyles(styleProps: BorderStyleableStyleDeclaration) {
        this?.applyStyles(styleProps);
    }

    getBorderStyles(): BorderStyleableStyleDeclaration {
        const { borderWidth, borderColor, borderRadius } = this?.getStyles();
        return { borderColor, borderRadius, borderWidth }
    }
}