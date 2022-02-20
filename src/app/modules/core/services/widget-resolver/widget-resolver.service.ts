import { Injectable } from '@angular/core';
import { Widget } from '../../widgets';
import { FlexContainerWidget } from '../../widgets/flex-container';
import { LargeHeadingWidget } from '../../widgets/large-heading';

@Injectable({
  providedIn: 'root'
})
export class WidgetResolverService {

  constructor() { }

  resolve(element: HTMLElement): Widget | null {
    console.log(`Resolving tag ${element.tagName}`)
    if(element.tagName === 'H1') {
      return new LargeHeadingWidget(element);
    }
    else if(element.tagName === 'SECTION') {
      return new FlexContainerWidget(element);
    }
    return null;
  }
}
