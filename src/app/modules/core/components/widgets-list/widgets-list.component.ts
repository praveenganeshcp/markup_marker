import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HtmlResolverService } from '../../services/html-resolver/html-resolver.service';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent implements OnInit {

  @Output() createWidget = new EventEmitter<HTMLElement>();
  constructor(private htmlResolver: HtmlResolverService) { }

  ngOnInit(): void {
  }

  createElement(tagName: string, className: string) {
    const element = this.htmlResolver.resolve(tagName, className);
    this.createWidget.emit(element);
  }
}
