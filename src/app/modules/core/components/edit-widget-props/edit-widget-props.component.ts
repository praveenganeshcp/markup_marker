import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BuilderService } from '../../services/builder/builder.service';
import { Widget } from '../../widgets';

@Component({
  selector: 'app-edit-widget-props',
  templateUrl: './edit-widget-props.component.html',
  styleUrls: ['./edit-widget-props.component.scss']
})
export class EditWidgetPropsComponent implements OnInit {

  @Input() editWidget: Widget;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  getEditWidget() {
    return this.editWidget;
  }

  applyStyles(styles: Partial<CSSStyleDeclaration>) {
    this.getEditWidget().applyStyles(styles);
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
