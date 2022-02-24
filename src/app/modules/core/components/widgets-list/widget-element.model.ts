export class WidgetElement {
   
    constructor( private name: string, private tagName: string, private className: string = '', private innerHTML: string = '') {}

    getName() {
        return this.name;
    }

    getTagName() {
        return this.tagName;
    }

    getClassName() {
        return this.className;
    }

    getInnerHTML() {
        return this.innerHTML;
    }

    isIconWidget() {
        return this.tagName === 'SPAN';
    }
}