import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlResolverService {

  constructor() { }

  resolve(tagName: string, className: string, innerHTML: string) {
    const element = document.createElement(tagName);
    if(className) {
      element.classList.add(className);
    }
    if(innerHTML) {
      element.innerHTML = innerHTML;
    }
    if(tagName === 'H1')  {
      this.applyStyles({
        fontSize: '2em',
        fontWeight: 'bolder',
        color: '#000000',
        backgroundColor: '#ffffff'
      }, element)
      element.innerHTML = 'Hello World'
      return element;
    }
    else if(tagName === 'H3')  {
      this.applyStyles({
        fontSize: '1.17em',
        fontWeight: 'bolder',
        color: '',
        backgroundColor: ''
      }, element)
      element.innerHTML = 'Hello World'
      return element;
    }
    else if(tagName === 'SPAN') {
      this.applyStyles({
        fontSize:'5em',
        fontWeight: 'lighter',
        color: '#000000',
        backgroundColor: '#ffffff'
      }, element)
      return element;
    }
    else if(tagName === 'SECTION') {
      this.applyStyles({
        paddingLeft : '0%',
        paddingRight: '0%',
        paddingTop: '0%',
        paddingBottom: '0%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '50%',
        height: '50%',
        border: '1px solid #000000',
        borderRadius: '0px',
        backgroundColor: '#ffffff',
        color: '#000000'
      }, element)
      return element;
    }
    throw new Error('Element not added in html resolver')
  }

  private applyStyles(styles: Partial<CSSStyleDeclaration>, element: HTMLElement) {
    Object.keys(styles).forEach(propKey => {
      element.style[propKey] = styles[propKey];
    })
  }
 }
