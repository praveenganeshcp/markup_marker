import { Injectable } from '@angular/core';
import { Widget } from '../../widgets';

@Injectable({
  providedIn: 'root'
})
export class BuilderService {

    private editWidget: Widget | null;

    public getEditWidget(): Widget | null {
        return this.editWidget;
    }

    public setEditWidget(editWidget: Widget | null): void {
        this.editWidget = editWidget;
    }

    constructor() { 
      this.setEditWidget(null);
    }

}
