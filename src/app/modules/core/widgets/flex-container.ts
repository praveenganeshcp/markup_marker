import { Widget } from ".";
import { Measurable } from "../mixins/measurable";
import { applyMixins } from "../utils/apply-mixins";

export class FlexContainerWidget extends Widget {
    constructor(element: HTMLElement) {
        super(element);
    }
}

applyMixins(FlexContainerWidget, [Measurable]);