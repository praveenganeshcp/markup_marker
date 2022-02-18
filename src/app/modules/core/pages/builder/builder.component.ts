import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContextMenuService } from 'src/app/modules/shared/services/context-menu/context-menu.service';
import { DialogService } from 'src/app/modules/shared/services/dialog/dialog.service';
import { CodeOutputComponent } from '../../components/code-output/code-output.component';
import { WidgetMenuComponent } from '../../components/widget-menu/widget-menu.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  private selectedWidget: HTMLElement | null;
  @ViewChild('builderRoot', {read: ElementRef}) builderRoot: ElementRef;

  constructor(private contextMenuService: ContextMenuService, private dialogService: DialogService) { 
    this.selectedWidget = null;
  }

  ngOnInit(): void {
  }

  setSelectedWidget(element: HTMLElement) {
    this.selectedWidget = element;
  }

  getSelectedWidget() {
    return this.selectedWidget;
  }

  onWidgetSelect(event) {
    event.preventDefault();
  
  }

  onContextMenu(event) {
    event.preventDefault();
    this.contextMenuService.open(WidgetMenuComponent, event.clientX, event.clientY)
    this.contextMenuService.afterClosed().subscribe(console.log)
  }

}
