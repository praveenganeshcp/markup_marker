export class WidgetElement {
   
    constructor( private name: string, private tagName: string, private className: string) {}

    getName() {
        return this.name;
    }

    getTagName() {
        return this.tagName;
    }

    getClassName() {
        return this.className;
    }
}