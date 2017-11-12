import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  private initHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    return headers;
  }

  private attachHeader(key: string, value: string, header?: HttpHeaders) {
    const headerToUse = header ? header : this.initHeaders();
    const headers = headerToUse.set(key, value);
    return headers;
  }

  private makeHeaders() {
    const headers = this.makeHeaders();
    return headers;
  }

  get(endpoint: string, id?: number) {
    endpoint = id ? `${endpoint}/${id}` : endpoint;
    const headers = this.makeHeaders();
    const result = this.http.get(endpoint, { headers: headers });
  }

  store(endpoint: string, id?: number, data?: any) {
    endpoint = id ? `${endpoint}/${id}` : endpoint;
    const headers = this.makeHeaders();
    const result = this.http.post(endpoint, data, { headers: headers });
  }

  update(endpoint: string, id?: number, data?: any) {
    endpoint = id ? `${endpoint}/${id}` : endpoint;
    const headers = this.makeHeaders();
    const result = this.http.put(endpoint, data, { headers: headers });
  }

  delete(endpoint: string, id?: number, data?: any) {
    endpoint = id ? `${endpoint}/${id}` : endpoint;
    const headers = this.makeHeaders();
    const result = this.http.delete(endpoint, { headers: headers });
  }

}
