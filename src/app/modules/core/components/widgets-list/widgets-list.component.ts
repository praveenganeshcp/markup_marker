import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HtmlResolverService } from '../../services/html-resolver/html-resolver.service';
import { WidgetElement } from './widget-element.model';
import { WidgetGroup } from './widget-group.model';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent implements OnInit {

  @Output() createWidget = new EventEmitter<HTMLElement>();
  private widgetGroups: WidgetGroup[];
  constructor(private htmlResolver: HtmlResolverService) { 
    this.widgetGroups = [
      new WidgetGroup('Text')
        .addElement(new WidgetElement('Large Heading', 'H1', {innerText: 'Hello world'}))
        .addElement(new WidgetElement('Small Heading', 'H3', {innerText: 'Hello world'})),
      new WidgetGroup('Icons')
      .addElement(new WidgetElement('5k', 'SPAN', {innerText:'5k'}, 'material-icons'))
      .addElement(new WidgetElement('smart_button', 'SPAN', {innerText: 'smart_button'}, 'material-icons'))
      .addElement(new WidgetElement('settings', 'SPAN', {innerText:'settings'}, 'material-icons')),
      new WidgetGroup('Container')
        .addElement(new WidgetElement('Flex container', 'SECTION', {})),
      new WidgetGroup('Input')
        .addElement(new WidgetElement('Text Input', 'INPUT', { type: 'text' }))
    ]
  }

  getWidgetGroups() {
    return this.widgetGroups;
  }

  ngOnInit(): void {
  }

  createElement(tagName: string, props: Partial<HTMLElement>, className: string,) {
    const element = this.htmlResolver.resolve(tagName, props, className);
    this.createWidget.emit(element);
  }
}
