import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  analytics(source: string) {
    return this.httpClient.post('http://3.111.187.226:4000/analytics', {
      source,
      site: 'markup-maker'
    })
  }
}
