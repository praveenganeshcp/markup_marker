import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent implements OnInit {

  @Output() createWidget = new EventEmitter<HTMLElement>();
  constructor() { }

  ngOnInit(): void {
  }

  createElement(tagName: string, className: string) {
    const element = document.createElement(tagName);
    element.innerText = 'Hello'
    if(className)
      element.classList.add(className);
    this.createWidget.emit(element);
  }
}
