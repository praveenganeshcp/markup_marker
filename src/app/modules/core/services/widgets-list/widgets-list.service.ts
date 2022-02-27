import { Injectable } from '@angular/core';
import { WidgetElement } from './widget-element.model';
import { WidgetGroup } from './widget-group.model';

@Injectable({
  providedIn: 'root'
})
export class WidgetsListService {

  constructor() { }

  getWidgetsList() {
    return [
        this.createTextWidgets(),
        this.createContainerWidgets(),
        this.createInputWidgets(),
        this.createIconWidgets(),
      ]
  }

  private createTextWidgets() {
    return new WidgetGroup('Text')
    .addElement(new WidgetElement('Large Heading', 'H1', {innerText: 'Hello world'}))
    .addElement(new WidgetElement('Small Heading', 'H3', {innerText: 'Hello world'}))
  }

  private createIconWidgets() {
    return new WidgetGroup('Icons')
    .addElement(new WidgetElement('5k', 'SPAN', {innerText:'5k'}, 'material-icons'))
    .addElement(new WidgetElement('smart_button', 'SPAN', {innerText: 'smart_button'}, 'material-icons'))
    .addElement(new WidgetElement('settings', 'SPAN', {innerText:'settings'}, 'material-icons'));
  }

  private createContainerWidgets() {
    return new WidgetGroup('Container')
    .addElement(new WidgetElement('Flex container', 'SECTION', {}))
  }

  private createInputWidgets() {
    return new WidgetGroup('Input')
    .addElement(new WidgetElement('Text Input', 'INPUT', { type: 'text', value: 'value1' }))
  }
}
