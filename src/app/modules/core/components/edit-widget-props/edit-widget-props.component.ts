import { Component, OnInit } from '@angular/core';
import { BuilderService } from '../../services/builder/builder.service';

@Component({
  selector: 'app-edit-widget-props',
  templateUrl: './edit-widget-props.component.html',
  styleUrls: ['./edit-widget-props.component.scss']
})
export class EditWidgetPropsComponent implements OnInit {

  constructor(private builderService: BuilderService) { }

  ngOnInit(): void {}

  isMeasureable() {
    return 'setMeasurableStyles' in this.builderService.getEditWidget();
  }

  isFontMeasureable() {
    return 'setFontMeasurableStyles' in this.builderService.getEditWidget();
  }

  isColorable() {
    return 'setColorStyles' in this.builderService.getEditWidget();
  }

  isPaddingStyleable() {
    return 'setPaddingStyles' in this.builderService.getEditWidget();
  }

  isContainerStyleable() {
    return 'setContainerStyles' in this.builderService.getEditWidget();
  }

  isBorderStyleable() {
    return 'setBorderStyles' in this.builderService.getEditWidget();
  }
}
