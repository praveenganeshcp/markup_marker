export function extractRGB(color: string) {
    return color.substring(4, color.length-1).split(', ')
}