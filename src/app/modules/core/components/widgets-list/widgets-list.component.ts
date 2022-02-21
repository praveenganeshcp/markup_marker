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
        .addElement(new WidgetElement('Large Heading', 'H1', ''))
    ]
  }

  getWidgetGroups() {
    return this.widgetGroups;
  }

  ngOnInit(): void {
  }

  createElement(tagName: string, className: string) {
    const element = this.htmlResolver.resolve(tagName, className);
    this.createWidget.emit(element);
  }
}
