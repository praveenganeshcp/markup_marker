import { rgbToHex } from "../utils/rgb-to-hex";

interface BoxShadowStyleDeclaration {
    horizontal: number | string;
    vertical: number | string;
    blur: number | string;
    spread: number | string;
    color: string;
}

export class BoxShadow {
    [x: string]: any;
    
    constructor() {}

    setBoxShadowStyles(styleProps: BoxShadowStyleDeclaration) {
        const boxShadow = `${styleProps.horizontal}px ${styleProps.vertical}px ${styleProps.blur}px ${styleProps.spread}px ${styleProps.color}`
        this?.applyStyles({boxShadow});
    }

    getBoxShadowStyles(): BoxShadowStyleDeclaration {
        let { boxShadow } = this?.getStyles();
        const boxShadowvalues = boxShadow.split(') ');
        const rgbColor = boxShadowvalues[0]+')';
        const values = boxShadowvalues[1];;
        const [ horizontal, vertical, blur, spread ] = values.split(' ').map(value => {
            return Number(value.split('px')[0]);
        })
        return { horizontal, vertical, blur, spread, color: rgbToHex(rgbColor) }
    }
}