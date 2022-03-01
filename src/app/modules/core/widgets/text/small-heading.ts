import { Colorable } from "../../mixins/colorable";
import { FontMeasurable } from "../../mixins/font-measurable";
import { applyMixins } from "../../utils/apply-mixins";
import { Widget } from "../widget";

export class SmallHeadingWidget extends Widget {
    constructor(element: HTMLElement) {
        super(element);
    }
}

applyMixins(SmallHeadingWidget, [Colorable, FontMeasurable]);