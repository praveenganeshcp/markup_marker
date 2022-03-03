import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContextMenuService } from 'src/app/modules/shared/services/context-menu/context-menu.service';
import { DialogService } from 'src/app/modules/shared/services/dialog/dialog.service';
import { WidgetMenuComponent } from '../../components/widget-menu/widget-menu.component';
import { WidgetResolverService } from '../../services/widget-resolver/widget-resolver.service';
import { Widget } from '../../widgets/widget';
import htmlFormatter from 'pretty';
import cssFormatter from 'cssbeautify';
import { ViewCodeComponent } from '../../components/view-code/view-code.component';
import { HelpBannerComponent } from '../../components/help-banner/help-banner.component';
import { HtmlResolverService } from '../../services/html-resolver/html-resolver.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit, AfterViewInit {

  private selectedWidget: Widget | null;
  private editWidget: Widget | null;
  @ViewChild('builderRoot', {read: ElementRef}) private builderRoot: ElementRef;
  @ViewChild('builderRootParent', {read: ElementRef}) private builderRootParent: ElementRef;
  
  constructor(private toast: ToastrService, private htmlResolver: HtmlResolverService, private widgetResolver: WidgetResolverService, private contextMenuService: ContextMenuService, private dialogService: DialogService) { 
    this.setSelectedWidget(null);
    this.setEditWidget(null);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.htmlResolver.setRootElementStyles(this.builderRoot.nativeElement);
    this.builderRoot.nativeElement.click();
    this.dialogService.open(HelpBannerComponent, 60, 60, {
        data: {},
        isClosable: true
    })
  }

  getBuilderRoot() {
    return this.builderRoot;
  }

  getBuilderRootParent() {
    return this.builderRootParent;
  }

  setSelectedWidget(element: Widget | null) {
    this.selectedWidget?.removeOutline();
    this.editWidget?.removeOutline();
    this.selectedWidget = element;
    this.editWidget = null;
    this.selectedWidget?.addOutline();
  }

  getSelectedWidget() {
    return this.selectedWidget;
  }

  setEditWidget(widget: Widget | null) {
    this.editWidget?.removeOutline();
    this.selectedWidget?.removeOutline();
    this.editWidget = widget;
    this.selectedWidget = null;
    this.editWidget?.addOutline();
  }

  getEditWidget() {
    return this.editWidget;
  }

  createWidget(element: HTMLElement) {
    const parentWidget = this.getSelectedWidget();
    if(parentWidget == null) {
      this.toast.warning('Choose the parent widget');
      return; 
    }
    else {
      parentWidget.appendChild(element);
    }
  }

  onWidgetSelect(event) {
    event.preventDefault();
    this.setSelectedWidget(this.widgetResolver.resolve(event.target));
  }

  showEditWidgetMenu() {
    return this.getEditWidget() !== null;
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
        else if(userChoice === 'delete') {
          if(event.target === this.getSelectedWidget()?.getElement()) {
            this.setSelectedWidget(null);
          }
          if(event.target === this.getEditWidget()?.getElement()) {
            this.setEditWidget(null);
          }
          widget.delete();
        }
        else if(userChoice === 'edit') {
          this.setEditWidget(widget);
        }
      }
    )
  }

  generateCode() {
    this.getSelectedWidget()?.removeOutline();
    this.getEditWidget()?.removeOutline();
    const rootElement = this.getBuilderRootParent().nativeElement.cloneNode(true);
    const elements = rootElement.querySelectorAll('*') as HTMLElement[];
    let cssText = '';
    elements.forEach(element => {
      cssText += `.${element.id} {${element.style.cssText}}`;
      element.classList.add(`${element.id}`);
      element.removeAttribute('style');
      element.removeAttribute('id');
    })
    this.showCode(htmlFormatter(rootElement.children[0].outerHTML), cssFormatter(cssText))
  }

  private showCode(htmlCode: string, cssText: string) {
    this.dialogService.open(ViewCodeComponent, 80, 80, {
      isClosable: true, 
      data: { htmlCode, cssText }
    })
  }
  

}
