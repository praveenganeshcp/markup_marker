import { ComponentFactoryResolver, ComponentRef, EventEmitter, Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {

  private host: HTMLElement
  private ref: ViewContainerRef;
  private isOpened: boolean;
  private componentRef: ComponentRef<any>;
  constructor(private resolver: ComponentFactoryResolver) { 
    this.isOpened = false;
  }

  setHost(host: HTMLElement) {
    this.host = host;
    console.log(this.host)
  }

  setContainerRef(ref: ViewContainerRef) {
      this.ref = ref;
      console.log(ref);
  }

  open(component: any, left: number, top: number) {
    if(! this.ref) {
      throw new Error("Ref is not initialized");
    }
    this.isOpened = true;
    this.ref.clear();
    this.host.style.left = left+'px';
    this.host.style.top = top+'px';
    this.host.style.height = '15%'
    this.host.style.width = '10%'
    this.host.style.backgroundColor = 'blue';
    const factory = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.ref.createComponent(factory);
    this.componentRef.instance.output = new EventEmitter<any>();
  }

  afterClosed() {
    return this.componentRef.instance.output;
  }

  close(data:any) {
    if(!this.isOpened) {
      return;
    }
    this.isOpened = false;
    this.componentRef.instance.output.emit(data);
    this.host.style.left = 0+'px';
    this.host.style.top = 0+'px';
    this.host.style.height = '0%'
    this.host.style.width = '0%'
    this.host.style.backgroundColor = 'blue';
    this.componentRef.destroy();
    this.ref.clear();
  }
}
