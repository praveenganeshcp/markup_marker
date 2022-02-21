import { Injectable } from "@angular/core";

type PaddingStyleableStyleDeclaration = Pick<CSSStyleDeclaration, 'paddingLeft' | 'paddingRight' | 'paddingBottom' | 'paddingTop'>

export class PaddingStyleable {
    [x: string]: any;
    constructor() {}

    setPaddingStyles(styleProps: PaddingStyleableStyleDeclaration) {
        styleProps.paddingBottom += '%';
        styleProps.paddingLeft += '%';
        styleProps.paddingRight += '%';
        styleProps.paddingTop += '%';
        this?.applyStyles(styleProps);
    }

    getPaddingStyles(): PaddingStyleableStyleDeclaration {
        let { paddingLeft, paddingRight, paddingBottom, paddingTop } = this?.getStyles();
        paddingLeft = Number(paddingLeft.split('%')[0]);
        paddingRight = Number(paddingRight.split('%')[0]);
        paddingBottom = Number(paddingBottom.split('%')[0]);
        paddingTop = Number(paddingTop.split('%')[0]);
        return { paddingBottom, paddingLeft,paddingRight, paddingTop }
    }
}