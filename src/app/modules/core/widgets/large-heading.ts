import { Colorable } from "../mixins/colorable";
import { FontMeasurable } from "../mixins/font-measurable";
import { TextProps } from "../mixins/text-props";
import { applyMixins } from "../utils/apply-mixins";
import { Widget } from "./widget";

export class LargeHeadingWidget extends Widget {
    constructor(element: HTMLElement) {
        super(element);
    }
}

applyMixins(LargeHeadingWidget, [Colorable, FontMeasurable, TextProps]);