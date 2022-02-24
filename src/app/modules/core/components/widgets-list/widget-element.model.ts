export class WidgetElement {
   
    constructor( private name: string, private tagName: string, private className: string = '', private innerText: string = '') {}

    getName() {
        return this.name;
    }

    getTagName() {
        return this.tagName;
    }

    getClassName() {
        return this.className;
    }

    getInnerText() {
        return this.innerText;
    }

    isIconWidget() {
        return this.tagName === 'SPAN';
    }
}