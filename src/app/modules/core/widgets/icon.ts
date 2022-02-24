import { Colorable } from "../mixins/colorable";
import { FontMeasurable } from "../mixins/font-measurable";
import { applyMixins } from "../utils/apply-mixins";
import { Widget } from "./widget";

export class IconWidget extends Widget {
    constructor(element: HTMLElement) {
        super(element);
    }
}

applyMixins(IconWidget, [Colorable, FontMeasurable]);