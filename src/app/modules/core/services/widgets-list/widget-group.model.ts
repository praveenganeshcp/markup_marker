import { WidgetElement } from "./widget-element.model";

export class WidgetGroup {
    private name: string;
    private elements: WidgetElement[];

    constructor(name: string) {
        this.name = name;
        this.elements = [];
    }

    addElement(element: WidgetElement) {
        this.elements.push(element);
        return this;
    }
    
    getName() {
        return this.name;
    }

    getElements() {
        return this.elements;
    }
}