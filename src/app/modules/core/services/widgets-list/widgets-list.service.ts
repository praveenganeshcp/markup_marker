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
        this.createButtonWidgets(),
        this.createContainerWidgets(),
        this.createInputWidgets(),
        this.createIconWidgets(),
      ]
  }

  private createButtonWidgets() {
    return new WidgetGroup('Buttons')
    .addElement(new WidgetElement('Button', 'BUTTON', {}))
    .addElement(new WidgetElement('Primary', 'BUTTON', {}, 'primary'))
    .addElement(new WidgetElement('Warning', 'BUTTON', {}, 'warning'))
  }

  private createTextWidgets() {
    return new WidgetGroup('Text')
    .addElement(new WidgetElement('Large Heading', 'H1', {innerText: 'Hello world'}))
    .addElement(new WidgetElement('Small Heading', 'H3', {innerText: 'Hello world'}))
    .addElement(new WidgetElement('Small Text', 'SMALL', {innerHTML: 'Hello world'}))
  }

  private createIconWidgets() {
    const iconGroup = new WidgetGroup('Icons')
    this.getIconList().forEach(icon => {
      iconGroup.addElement(new WidgetElement(icon, 'SPAN', {innerText:icon}, 'material-icons'))
    })
    return iconGroup;
  }

  private createContainerWidgets() {
    return new WidgetGroup('Container')
    .addElement(new WidgetElement('Flex container', 'SECTION', {}))
    .addElement(new WidgetElement('Header', 'HEADER', {}))
    .addElement(new WidgetElement('Footer', 'FOOTER', {}))
    .addElement(new WidgetElement('Navigation Bar', 'NAV', {}))
  }

  private createInputWidgets() {
    return new WidgetGroup('Input')
    .addElement(new WidgetElement('Text Input', 'INPUT', { type: 'text', value: 'value1' }))
  }

  private getIconList() {
    return ['settings', 'check_circle', 'visibility', 'favorite', 'face', 'delete', 'check_circle_outline', 'account_balance',
    'account_balance_wallet', 'view_list', 'verified_user', 'code', 'watch_later', 'launch', 'payment', 
    'exit_to_app', 'thumb_up_off_alt', 'dns', 'bug_report']
  }
}
