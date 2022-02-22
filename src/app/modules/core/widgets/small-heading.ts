import { Widget } from ".";
import { Colorable } from "../mixins/colorable";
import { FontMeasurable } from "../mixins/font-measurable";
import { applyMixins } from "../utils/apply-mixins";

export class SmallHeadingWidget extends Widget {
    constructor(element: HTMLElement) {
        super(element);
    }
}

applyMixins(SmallHeadingWidget, [Colorable, FontMeasurable]);