import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';



@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {

    }

    doGet(url: string): Observable<any> {
      const h = new HttpHeaders();


        const urlWS = 'https://5000-b5c3ff28-834c-4ec6-9805-5ea4dfa9be4a.ws-us02.gitpod.io/' + url;

        const ws = this.http.get(urlWS, { headers: h }).subscribe(
            data => {
                return ws;
            },
            err => {
               alert('problema');
              }
          );

          return ws;
    }

    private handleError(error: Response) {

        console.error(error);

        return Observable.throw(error.json() || 'Server error');

    }

    doPost(url: string, objeto: any, onSuccess?): Observable<any> {
      const h = new HttpHeaders();


      const urlWS = 'https://5000-b5c3ff28-834c-4ec6-9805-5ea4dfa9be4a.ws-us02.gitpod.io/' + url;

      const ws = this.http.post(urlWS, objeto);

      return ws;
  }


}
