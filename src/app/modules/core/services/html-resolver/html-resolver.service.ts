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
      element.style.fontSize = '2em';
      element.style.fontWeight = 'bolder';
      element.innerHTML = 'Hello World'
      element.style.color = '#000000'
      element.style.backgroundColor  ='#ffffff'
      return element;
    }
    else if(tagName === 'H3')  {
      element.style.fontSize = '1.17em';
      element.style.fontWeight = 'bolder';
      element.innerHTML = 'Hello World'
      element.style.color = '#000000'
      element.style.backgroundColor  ='#ffffff'
      return element;
    }
    else if(tagName === 'SPAN') {
      element.style.fontSize = '5em';
      element.style.fontWeight = 'lighter';
      element.style.color = 'black'
      element.style.backgroundColor  ='white'
      return element;
    }
    throw new Error('Element not added in html resolver')
  }
}
