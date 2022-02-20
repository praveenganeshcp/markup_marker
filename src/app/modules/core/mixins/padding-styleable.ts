import { Injectable } from "@angular/core";
import { BuilderService } from "../services/builder/builder.service";

type PaddingStyleableStyleDeclaration = Pick<CSSStyleDeclaration, 'paddingLeft' | 'paddingRight' | 'paddingBottom' | 'paddingTop'>

export class PaddingStyleable {
    [x: string]: any;
    constructor() {}

    setPaddingStyles(styleProps: PaddingStyleableStyleDeclaration) {
        this?.applyStyles(styleProps);
    }

    getPaddingStyles(): PaddingStyleableStyleDeclaration {
        const { paddingLeft, paddingRight, paddingBottom, paddingTop } = this?.getStyles();
        return { paddingBottom, paddingLeft,paddingRight, paddingTop }
    }
}