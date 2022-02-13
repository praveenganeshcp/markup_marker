import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appName: string;
  constructor() { 
    this.appName = 'Markup Maker V2';
  }

  getAppName() {
    return this.appName;
  }
}
