import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContextMenuService } from 'src/app/modules/shared/services/context-menu/context-menu.service';
import { DialogService } from 'src/app/modules/shared/services/dialog/dialog.service';
import { CodeOutputComponent } from '../../components/code-output/code-output.component';
import { WidgetMenuComponent } from '../../components/widget-menu/widget-menu.component';
import { BuilderService } from '../../services/builder/builder.service';
import { WidgetResolverService } from '../../services/widget-resolver/widget-resolver.service';
import { Widget } from '../../widgets';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit, AfterViewInit {

  private selectedWidget: Widget | null;
  @ViewChild('builderRoot', {read: ElementRef}) builderRoot: ElementRef;

  constructor(private widgetResolver: WidgetResolverService, private builderService: BuilderService, private contextMenuService: ContextMenuService, private dialogService: DialogService) { 
    this.setSelectedWidget(null);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  setSelectedWidget(element: Widget) {
    this.selectedWidget?.removeOutline();
    this.selectedWidget = element;
    this.selectedWidget?.addOutline();
  }

  getSelectedWidget() {
    return this.selectedWidget;
  }

  createWidget(element: HTMLElement) {
    this.getSelectedWidget().appendChild(element);
  }

  onWidgetSelect(event) {
    event.preventDefault();
    this.setSelectedWidget(this.widgetResolver.resolve(event.target));
  }

  showEditWidgetMenu() {
    return this.builderService.getEditWidget() !== null;
  }

  onContextMenu(event) {
    event.preventDefault();
    this.contextMenuService.open(WidgetMenuComponent, event.clientX, event.clientY)
    const widget = this.widgetResolver.resolve(event.target);
    this.contextMenuService.afterClosed().subscribe(
      (userChoice: string) => {
        console.log(userChoice);
        if(userChoice === 'copy') {
          widget.copy();
        }
        else if(userChoice === 'remove') {
          widget.delete();
        }
        else if(userChoice === 'edit') {
          this.builderService.setEditWidget(widget);
        }
      }
    )
  }

}
