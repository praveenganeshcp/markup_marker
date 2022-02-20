import { Injectable } from "@angular/core";
import { BuilderService } from "../services/builder/builder.service";

type FontMeasurableStyleDeclaration = Pick<CSSStyleDeclaration, 'fontSize' | 'fontWeight'>

@Injectable()
export class FontMeasurable {

    constructor(private builderService: BuilderService) {}

    setFontMeasurableStyles(styleProps: FontMeasurableStyleDeclaration) {
        this.builderService.getEditWidget().applyStyles(styleProps);
    }
    getFontMeasurableStyles(): FontMeasurableStyleDeclaration {
        const { fontSize, fontWeight } = this.builderService.getEditWidget().getStyles();
        return { fontSize, fontWeight };
    }
}