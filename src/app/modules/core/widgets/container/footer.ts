import { BorderStyleable } from "../../mixins/border-styleable";
import { BoxShadow } from "../../mixins/box-shadow";
import { Colorable } from "../../mixins/colorable";
import { ContainerStyleable } from "../../mixins/container-styleable";
import { Measurable } from "../../mixins/measurable";
import { PaddingStyleable } from "../../mixins/padding-styleable";
import { applyMixins } from "../../utils/apply-mixins";
import { Widget } from "../widget";


export class FooterWidget extends Widget {
    constructor(element: HTMLElement) {
        super(element);
    }
}

applyMixins(FooterWidget, [BoxShadow, Colorable, Measurable, BorderStyleable, ContainerStyleable, PaddingStyleable]);