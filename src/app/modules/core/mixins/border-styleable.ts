import { Injectable } from "@angular/core";

type BorderStyleableStyleDeclaration = Pick<CSSStyleDeclaration, 'borderWidth' | 'borderColor' | 'borderRadius'>

export class BorderStyleable {
    [x: string]: any;
    constructor() {}

    setBorderStyles(styleProps: BorderStyleableStyleDeclaration) {
        // const [r, g, b] = styleProps.borderColor.substring(4, styleProps.borderColor.length-1).split(', ');
        // styleProps.borderColor = this.rgbToHex(r, g, b);
        styleProps.borderRadius += 'px';
        styleProps.borderWidth += 'px';
        this?.applyStyles(styleProps);
    }

    getBorderStyles(): BorderStyleableStyleDeclaration {
        let { borderWidth, borderColor, borderRadius } = this?.getStyles();
        borderWidth = Number(borderWidth.split('px')[0]);
        borderRadius = Number(borderRadius.split('px')[0]);
        return { borderColor, borderRadius, borderWidth }
    }

    private componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
      
    private rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
}