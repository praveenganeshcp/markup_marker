import { Injectable } from '@angular/core';
import { FlexContainerWidget, IconWidget } from '../../widgets';
import { ButtonWidget } from '../../widgets/buttons/button';
import { FooterWidget } from '../../widgets/container/footer';
import { HeaderWidget } from '../../widgets/container/header';
import { NavBarWidget } from '../../widgets/container/nav-bar';
import { TextInputWidget } from '../../widgets/input/text-input';
import { LargeHeadingWidget } from '../../widgets/text/large-heading';
import { SmallHeadingWidget } from '../../widgets/text/small-heading';
import { SmallTextWidget } from '../../widgets/text/small-text';
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
    else if(tagName === 'NAV') {
      return new NavBarWidget(element);
    }
    else if(tagName === 'HEADER') {
      return new HeaderWidget(element);
    }
    else if(tagName === 'FOOTER') {
      return new FooterWidget(element);
    }
    throw new Error('Widget not added for '+tagName);
  }
}
