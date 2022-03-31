import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, timeout, retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class RestAPIService {
//  BASEURL = 'http://180.179.49.72:8084';
BASEURL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json';
  public HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':'Content-Type',
      'Access-Control-Allow-Methods' : 'Get,Post,Put,Delete,Options',
      'Access-Control-Allow-Credentials' : 'true'
    })
  };
  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    return this.httpClient.get(this.BASEURL);
  }

  post(url: string, obj: any): Observable<any> {
    return this.httpClient.post(this.BASEURL + url, obj).pipe(
     // delay(90000),
    //  retry(1),
      catchError(this.handleError)
    );
  }

  getByParameters(url: string, params: any): Observable<any> {
   return this.httpClient.get(this.BASEURL + url, { params: params });
  }

  put(url: string, obj: any): Observable<any> {
   return this.httpClient.put(this.BASEURL + url, obj).pipe(
    //retry(1),
    catchError(this.handleError)
  );
  }

  delete(url: string, options: { headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined; context?: HttpContext | undefined; observe?: "body" | undefined; params?: HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[]; } | undefined; reportProgress?: boolean | undefined; responseType: "arraybuffer"; withCredentials?: boolean | undefined; body?: any; }): Observable<any> {
    return this.httpClient.delete(this.BASEURL + url, options);
  }

  handleError(error: any) {    
    return throwError(error);
  }

}
