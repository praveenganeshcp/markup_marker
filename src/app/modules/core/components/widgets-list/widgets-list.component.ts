import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HtmlResolverService } from '../../services/html-resolver/html-resolver.service';
import { WidgetGroup } from '../../services/widgets-list/widget-group.model';
import { WidgetsListService } from '../../services/widgets-list/widgets-list.service';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent implements OnInit {

  @Output() createWidget = new EventEmitter<HTMLElement>();
  private widgetGroups: WidgetGroup[];
  constructor(private htmlResolver: HtmlResolverService, private widgetsListService: WidgetsListService) { 
    this.widgetGroups = this.widgetsListService.getWidgetsList();
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
