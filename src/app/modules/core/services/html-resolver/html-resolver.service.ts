import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlResolverService {

  constructor() { }

  resolve(tagName: string, className: string) {
    const element = document.createElement(tagName);
    if(className) {
      element.classList.add(className);
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
    throw new Error('Element not added in html resolver')
  }
}
