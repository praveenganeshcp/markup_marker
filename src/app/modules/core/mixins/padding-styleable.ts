import { Injectable } from "@angular/core";
import { BuilderService } from "../services/builder/builder.service";

type PaddingStyleableStyleDeclaration = Pick<CSSStyleDeclaration, 'paddingLeft' | 'paddingRight' | 'paddingBottom' | 'paddingTop'>


@Injectable()
export class PaddingStyleable {
    constructor(private builder: BuilderService) {}

    setPaddingStyles(styleProps: PaddingStyleableStyleDeclaration) {
        this.builder.getEditWidget().applyStyles(styleProps);
    }

    getPaddingStyles(): PaddingStyleableStyleDeclaration {
        const { paddingLeft, paddingRight, paddingBottom, paddingTop } = this.builder.getEditWidget().getStyles();
        return { paddingBottom, paddingLeft,paddingRight, paddingTop }
    }
}