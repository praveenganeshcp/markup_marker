import { Injectable } from "@angular/core";

type ColorableStyleDeclaration = Pick<CSSStyleDeclaration, 'color' | 'backgroundColor'>;

export class Colorable {
    [x: string]: any;
    
    constructor() {}

    setColorStyles(styleProps: ColorableStyleDeclaration) {
        this?.applyStyles(styleProps);
    }

    getColorStyles(): ColorableStyleDeclaration {
        const { color, backgroundColor } = this?.getStyles();
        return { color, backgroundColor }
    }
}