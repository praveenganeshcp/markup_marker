import { Injectable } from '@angular/core';
import { IconWidget } from '../../widgets';
import { ButtonWidget } from '../../widgets/button';
import { FlexContainerWidget } from '../../widgets/flex-container';
import { LargeHeadingWidget } from '../../widgets/large-heading';
import { SmallHeadingWidget } from '../../widgets/small-heading';
import { SmallTextWidget } from '../../widgets/small-text';
import { TextInputWidget } from '../../widgets/text-input';
import { Widget } from '../../widgets/widget';

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
    else if(tagName === 'SPAN') {
      return new IconWidget(element);
    }
    else if(tagName === 'INPUT') {
      if(element instanceof HTMLInputElement) {
        if(element.type === 'text') {
          return new TextInputWidget(element)
        }
      }
    }
    else if(tagName === 'SMALL') {
      return new SmallTextWidget(element);
    }
    else if(tagName === 'BUTTON') {
      return new ButtonWidget(element);
    }
    throw new Error('Widget not added for '+tagName);
  }
}
