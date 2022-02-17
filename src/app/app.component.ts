import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ContextMenuService } from './modules/shared/services/context-menu/context-menu.service';
import { DialogService } from './modules/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('contextMenuHost', {read: ElementRef}) contextMenuHost: ElementRef;
  @ViewChild('contextMenu', {read: ViewContainerRef}) contextMenuContainer;
  @ViewChild('dialogHost', {read: ElementRef}) dialogHost: ElementRef;
  @ViewChild('dialog', {read: ViewContainerRef}) dialogContainer: ViewContainerRef;
  @ViewChild('dialogRootHost', {read: ElementRef}) dialogRootHost: ElementRef;


  constructor(private contextMenuService: ContextMenuService, private dialogService: DialogService) { }

  ngAfterViewInit(): void {
    this.contextMenuService.setHost(this.contextMenuHost.nativeElement);
    this.contextMenuService.setContainerRef(this.contextMenuContainer);
    this.dialogService.setRootHost(this.dialogRootHost.nativeElement);
    this.dialogService.setHost(this.dialogHost.nativeElement);
    this.dialogService.setRef(this.dialogContainer);
  }

  closeAllPopups() {
    this.contextMenuService.close(undefined)
    this.dialogService.close(undefined)
  }
}
