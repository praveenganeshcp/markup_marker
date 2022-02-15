import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ContextMenuService } from './modules/shared/services/context-menu/context-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('contextMenuHost', {read: ElementRef}) contextMenuHost: ElementRef;
  @ViewChild('contextMenu', {read: ViewContainerRef}) contextMenuContainer;


  constructor(private contextMenuService: ContextMenuService) { }

  ngAfterViewInit(): void {
    this.contextMenuService.setHost(this.contextMenuHost.nativeElement);
    this.contextMenuService.setContainerRef(this.contextMenuContainer);
  }
}
