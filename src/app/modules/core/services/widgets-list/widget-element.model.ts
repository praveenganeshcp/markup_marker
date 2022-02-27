export class WidgetElement {
   
    constructor( private name: string, private tagName: string, private props: Partial<HTMLElement | HTMLInputElement>, private className: string = '') {}

    getName() {
        return this.name;
    }

    getTagName() {
        return this.tagName;
    }

    getClassName() {
        return this.className;
    }

    getProps() {
        return this.props;
    }

    isIconWidget() {
        return this.tagName === 'SPAN';
    }
}