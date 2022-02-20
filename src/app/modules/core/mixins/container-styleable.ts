import { Injectable } from "@angular/core";
import { BuilderService } from "../services/builder/builder.service";

type ContainerStyleableStyleDeclaration = Pick<CSSStyleDeclaration, 'alignItems' | 'justifyContent'>

export class ContainerStyleable {
    [x: string]: any;
    constructor() {}

    setContainerStyles(styleProps: ContainerStyleableStyleDeclaration) {
        this?.applyStyles(styleProps);
    }

    getContainerStyles(): ContainerStyleableStyleDeclaration {
        const { alignItems, justifyContent } = this?.getStyles();
        return { alignItems, justifyContent }
    }
}