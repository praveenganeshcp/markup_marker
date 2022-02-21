import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Widget } from '../../widgets';

@Component({
  selector: 'app-edit-widget-props',
  templateUrl: './edit-widget-props.component.html',
  styleUrls: ['./edit-widget-props.component.scss']
})
export class EditWidgetPropsComponent implements OnInit, OnChanges {

  @Input() editWidget: Widget;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const editWidgetChange: SimpleChange = changes.editWidget;
    if(!editWidgetChange.firstChange) {
      this.editWidget = editWidgetChange.currentValue;
    }
  }

  getEditWidget() {
    return this.editWidget;
  }

  setFontMeasurableStyles(styles: Partial<CSSStyleDeclaration>) {
    this.getEditWidget().setFontMeasurableStyles(styles);
  }

  setContainerStyles(styles: Partial<CSSStyleDeclaration>) {
    this.getEditWidget().setContainerStyles(styles);
  }

  setPaddingStyles(styles: Partial<CSSStyleDeclaration>) {
    this.getEditWidget().setPaddingStyles(styles);
  }

  setMeasurableStyles(styles: Partial<CSSStyleDeclaration>) {
    this.getEditWidget().setMeasurableStyles(styles);
  }

  setBorderStyles(styles: Partial<CSSStyleDeclaration>) {
    this.getEditWidget().setBorderStyles(styles);
  }

  isMeasureable() {
    return 'setMeasurableStyles' in this.editWidget;
  }

  isFontMeasureable() {
    return 'setFontMeasurableStyles' in this.editWidget;
  }

  isColorable() {
    return 'setColorStyles' in this.editWidget;
  }

  isPaddingStyleable() {
    return 'setPaddingStyles' in this.editWidget;
  }

  isContainerStyleable() {
    return 'setContainerStyles' in this.editWidget;
  }

  isBorderStyleable() {
    return 'setBorderStyles' in this.editWidget;
  }
  
  closeTab() {
    this.close.emit();
  }
}
