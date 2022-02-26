import { ComponentFactoryResolver, ComponentRef, EventEmitter, Injectable, ViewContainerRef } from '@angular/core';
import { DialogProps } from './dialog.props';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private ref: ViewContainerRef;
  private host: HTMLElement;
  private rootHost: HTMLElement;
  private componentRef: ComponentRef<any> | null;
  private dialogProps: DialogProps | null;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { 
    this.componentRef = null;
    this.dialogProps = null;
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

  open(component: any, height: number, width: number, props: DialogProps) {
    this.ref.clear();
    this.dialogProps = props;
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

  onOutsideClick() {
    if(this.dialogProps.isClosable === false) {
      return;
    }
    this.close(undefined);
  }

  getData() {
    return this.dialogProps.data;
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
    this.dialogProps = null;
    this.ref.clear()
  }
}
