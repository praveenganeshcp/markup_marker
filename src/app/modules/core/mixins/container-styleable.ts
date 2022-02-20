import { Injectable } from "@angular/core";
import { BuilderService } from "../services/builder/builder.service";

type ContainerStyleableStyleDeclaration = Pick<CSSStyleDeclaration, 'alignItems' | 'justifyContent'>


@Injectable()
export class ContainerStyleable {
    constructor(private builder: BuilderService) {}

    setContainerStyles(styleProps: ContainerStyleableStyleDeclaration) {
        this.builder.getEditWidget().applyStyles(styleProps);
    }

    getContainerStyles(): ContainerStyleableStyleDeclaration {
        const { alignItems, justifyContent } = this.builder.getEditWidget().getStyles();
        return { alignItems, justifyContent }
    }
}