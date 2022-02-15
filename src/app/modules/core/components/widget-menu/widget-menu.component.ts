import { Component, EventEmitter, OnInit } from '@angular/core';
import { ContextMenuService } from 'src/app/modules/shared/services/context-menu/context-menu.service';

@Component({
  selector: 'app-widget-menu',
  templateUrl: './widget-menu.component.html',
  styleUrls: ['./widget-menu.component.scss']
})
export class WidgetMenuComponent implements OnInit {

  constructor(private contextMenuService: ContextMenuService) { }

  ngOnInit(): void {
  }

  close() {
    this.contextMenuService.close('Hello');
  }

  test() {
  }

}
