import { Widget } from ".";
import { BorderStyleable } from "../mixins/border-styleable";
import { ContainerStyleable } from "../mixins/container-styleable";
import { Measurable } from "../mixins/measurable";
import { applyMixins } from "../utils/apply-mixins";

export class FlexContainerWidget extends Widget {
    constructor(element: HTMLElement) {
        super(element);
    }
}

applyMixins(FlexContainerWidget, [Measurable, BorderStyleable, ContainerStyleable]);