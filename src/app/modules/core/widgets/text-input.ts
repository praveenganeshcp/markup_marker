import { BorderStyleable } from "../mixins/border-styleable";
import { FontMeasurable } from "../mixins/font-measurable";
import { PaddingStyleable } from "../mixins/padding-styleable";
import { applyMixins } from "../utils/apply-mixins";
import { Widget } from "./widget";

export class TextInputWidget extends Widget {
    constructor(element: HTMLElement) {
        super(element);
    }
}

applyMixins(TextInputWidget, [FontMeasurable, PaddingStyleable, BorderStyleable]);