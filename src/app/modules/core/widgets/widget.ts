export class Widget {
    [x: string]: any;

    private element: HTMLElement;

    public getElement(): HTMLElement {
        return this.element;
    }

    public setElement(element: HTMLElement): void {
        this.element = element;
    }

    constructor(element: HTMLElement) {
        this.setElement(element);
    }

    applyStyles(styles: Partial<CSSStyleDeclaration>) {
        Object.keys(styles).forEach(prop => {
            this.element.style[prop] = styles[prop];
        })
    }

    applyProps(props: HTMLElement) {
        Object.keys(props).forEach(key => {
            this.element[key] = props[key];
        })
    }

    fetchProps() {
        return this.element;
    }

    getStyles() {
        return this.element.style;
    }

    appendChild(element: HTMLElement) {
        this.getElement().appendChild(element);
    }

    addOutline() {
        this.applyStyles({
            outlineWidth: '3px',
            outlineColor: 'blue',
            outlineStyle: 'solid'
        })
    }
  
    removeOutline() {
        this.applyStyles({
            outlineWidth: '0px',
            outlineColor: 'black',
            outlineStyle: 'solid'
        })
    }

    delete() {
        
    }

    copy() {
        const clonedNode = this.getElement().cloneNode(true);
        this.appendChild(clonedNode as HTMLElement);
    }
}