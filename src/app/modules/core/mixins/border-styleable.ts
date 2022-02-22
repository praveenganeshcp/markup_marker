import { rgbToHex } from "../utils/rgb-to-hex";

type BorderStyleableStyleDeclaration = Pick<CSSStyleDeclaration, 'borderWidth' | 'borderColor' | 'borderRadius'>

export class BorderStyleable {
    [x: string]: any;
    constructor() {}

    setBorderStyles(styleProps: BorderStyleableStyleDeclaration) {
        styleProps.borderRadius += 'px';
        styleProps.borderWidth += 'px';
        this?.applyStyles(styleProps);
    }

    getBorderStyles(): BorderStyleableStyleDeclaration {
        let { borderWidth, borderColor, borderRadius } = this?.getStyles();
        borderColor = rgbToHex(borderColor);
        borderWidth = Number(borderWidth.split('px')[0]);
        borderRadius = Number(borderRadius.split('px')[0]);
        return { borderColor, borderRadius, borderWidth }
    }
   
}