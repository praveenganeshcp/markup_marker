import { extractRGB } from "./extract-rgb";

export function rgbToHex(rgbColorCode: string) {
    const colorCode = extractRGB(rgbColorCode);
    const result = "#" + colorCode.map((x) => {           
        x = parseInt(x).toString(16);     
        return (x.length==1) ? "0"+x : x; 
    }).join('');
    return result;
}