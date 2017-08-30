import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Client } from '../models/client';

@Injectable()
export class ClientsService {
  constructor(private http: Http) {
  }
  /**
   * Get List of clients from API and transform it to Client Array
   * @returns {Observable<R|T>}
   * @public
   */
  public getClients(): Observable<any> {
      return this.http.get('http://api.demo.lakmus.org/api/clients')
        .map((response: Response) => response.json())
        .map((resClients: any[]) => resClients.map((resClient: any) => new Client(resClient)))
        .catch(this.handleError);
  }

  /**
   * Catch the error
   * @param error {Response}
   * @returns {any}
   */
  private handleError(error: Response): ErrorObservable {
    return Observable.throw(error.json().error || 'Server error');
  }

}
