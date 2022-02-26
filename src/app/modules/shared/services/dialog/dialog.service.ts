import { ComponentFactoryResolver, ComponentRef, EventEmitter, Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private ref: ViewContainerRef;
  private host: HTMLElement;
  private rootHost: HTMLElement;
  private componentRef: ComponentRef<any> | null;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { 
    this.componentRef = null;
  }

  setRef(ref: ViewContainerRef) {
    this.ref = ref;
  }

  setRootHost(rootHost: HTMLElement) {
    this.rootHost = rootHost;
  }

  setHost(host: HTMLElement) {
    this.host = host;
  }

  open(component: any, height: number, width: number) {
    this.ref.clear();
    this.rootHost.style.height = '100%';
    this.rootHost.style.width = '100%';
    this.host.style.height = height+'%';
    this.host.style.width = width+'%';
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.ref.createComponent(factory);
    this.componentRef.instance.output = new EventEmitter<any>();
  }

  afterClosed() {
    return this.componentRef.instance.output;
  }

  close(data: any) {
    if(this.componentRef === null) {
      return;
    }
    this.host.style.height = 0+'%';
    this.host.style.width = 0+'%';
    this.rootHost.style.height = 0+'%';
    this.rootHost.style.width = 0+'%';
    this.componentRef.instance.output.emit(data);
    this.componentRef?.destroy();
    this.componentRef = null;
    this.ref.clear()
  }
}
