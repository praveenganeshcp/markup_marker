import { Injectable } from "@angular/core";
import { rgbToHex } from "../utils/rgb-to-hex";

type ColorableStyleDeclaration = Pick<CSSStyleDeclaration, 'color' | 'backgroundColor'>;

export class Colorable {
    [x: string]: any;
    
    constructor() {}

    setColorStyles(styleProps: ColorableStyleDeclaration) {
        this?.applyStyles(styleProps);
    }

    getColorStyles(): ColorableStyleDeclaration {
        let { color, backgroundColor } = this?.getStyles();
        color = rgbToHex(color);
        backgroundColor = rgbToHex(backgroundColor);
        return { color, backgroundColor }
    }
}