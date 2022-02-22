import { Injectable } from '@angular/core';
import { Widget } from '../../widgets';
import { FlexContainerWidget } from '../../widgets/flex-container';
import { LargeHeadingWidget } from '../../widgets/large-heading';
import { SmallHeadingWidget } from '../../widgets/small-heading';

@Injectable({
  providedIn: 'root'
})
export class WidgetResolverService {

  constructor() { }

  resolve(element: HTMLElement): Widget | null {
    const tagName = element.tagName;
    console.log(`Resolving tag ${tagName}`)
    if(tagName === 'H1') {
      return new LargeHeadingWidget(element);
    }
    else if(tagName === 'H3') {
      return new SmallHeadingWidget(element);
    }
    else if(tagName === 'SECTION') {
      return new FlexContainerWidget(element);
    }
    throw new Error('Widget not added for '+tagName)
    return null;
  }
}
