import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlResolverService {

  constructor() { }

  resolve(tagName: string, props: Partial<HTMLElement>, className: string) {
    const element = document.createElement(tagName);
    element.setAttribute('id', `${tagName}-${Date.now()}`)
    if(className) {
      element.classList.add(className);
    }
    this.applyProps(props, element);
    switch(tagName) {
      case 'H1': {
        this.setLargeHeadingProps(element);
        break;
      }
      case 'H3': {
        this.setSmallHeadingProps(element);
        break;
      }
      case 'SPAN': {
        this.setSpanProps(element);
        break;
      }
      case 'SECTION': {
        this.setSectionProps(element);
        break;
      }
      case 'INPUT': {
        if('type' in props) {
          if(props['type'] === 'text') {
            console.log('caled')
            this.setTextInputProps(element);          
          }
        }
        break;
      }
      default: {
        throw new Error('Element not added in html resolver')
      }
    }
    return element;
  }

  private applyStyles(styles: Partial<CSSStyleDeclaration>, element: HTMLElement) {
    Object.keys(styles).forEach(propKey => {
      element.style[propKey] = styles[propKey];
    })
  }

  private applyProps(props: Partial<HTMLElement>, element: HTMLElement) {
    Object.keys(props).forEach(key => {
      element[key] = props[key];
    })
  }

  private setTextInputProps(element: HTMLElement) {
    this.applyStyles({
      fontSize: '2em',
      fontWeight: 'bolder',
      paddingLeft : '0%',
      paddingRight: '0%',
      paddingTop: '0%',
      paddingBottom: '0%',
      border: '1px solid #000000',
      borderRadius: '0px',
      width: '10%',
      height: '5%',
    }, element)
  }

  private setLargeHeadingProps(element: HTMLElement) {
    this.applyStyles({
      fontSize: '2em',
      fontWeight: 'bolder',
      color: '#000000',
      backgroundColor: '#ffffff'
    }, element)
  }

  private setSmallHeadingProps(element: HTMLElement) {
    this.applyStyles({
      fontSize: '1.17em',
      fontWeight: 'bolder',
      color: '',
      backgroundColor: ''
    }, element)
  }

  private setSpanProps(element: HTMLElement) {
    this.applyStyles({
      fontSize:'5em',
      fontWeight: 'lighter',
      color: '#000000',
      backgroundColor: '#ffffff'
    }, element)
  }

  private setSectionProps(element: HTMLElement) {
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
  }
 }
