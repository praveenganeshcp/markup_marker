import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HtmlResolverService } from '../../services/html-resolver/html-resolver.service';
import { WidgetsListService } from '../../services/widgets-list/widgets-list.service';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent implements OnInit {

  @Output() createWidget = new EventEmitter<HTMLElement>();
  constructor(private htmlResolver: HtmlResolverService, private widgetsListService: WidgetsListService) { }

  getWidgetGroups() {
    return this.widgetsListService.getWidgetsList();
  }

  ngOnInit(): void {
  }

  createElement(tagName: string, props: Partial<HTMLElement>, className: string,) {
    const element = this.htmlResolver.resolve(tagName, props, className);
    this.createWidget.emit(element);
  }
}
