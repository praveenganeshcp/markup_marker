import { Injectable } from "@angular/core";
import { BuilderService } from "../services/builder/builder.service";

type ColorableStyleDeclaration = Pick<CSSStyleDeclaration, 'color' | 'backgroundColor'>;

@Injectable()
export class Colorable {
    
    constructor(private builderService: BuilderService) {}

    setColorStyles(styleProps: ColorableStyleDeclaration) {
        this.builderService.getEditWidget().applyStyles(styleProps);
    }

    getColorStyles(): ColorableStyleDeclaration {
        const { color, backgroundColor } = this.builderService.getEditWidget().getStyles();
        return { color, backgroundColor }
    }
}