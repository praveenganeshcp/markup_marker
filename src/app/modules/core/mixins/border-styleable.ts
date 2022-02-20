import { Injectable } from "@angular/core";
import { BuilderService } from "../services/builder/builder.service";

type BorderStyleableStyleDeclaration = Pick<CSSStyleDeclaration, 'borderWidth' | 'borderColor' | 'borderRadius'>


@Injectable()
export class BorderStyleable {
    constructor(private builder: BuilderService) {}

    setBorderStyles(styleProps: BorderStyleableStyleDeclaration) {
        this.builder.getEditWidget().applyStyles(styleProps);
    }

    getBorderStyles(): BorderStyleableStyleDeclaration {
        const { borderWidth, borderColor, borderRadius } = this.builder.getEditWidget().getStyles();
        return { borderColor, borderRadius, borderWidth }
    }
}