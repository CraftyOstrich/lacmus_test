import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Client } from '../models/client';

@Injectable()
export class ClientsService {
  /**
   * Url of API with clients
   * @type {string}
   * @private
   */
  private _apiUrl = 'http://api.demo.lakmus.org/api/clients';
  constructor(private http: Http) {
  }
  /**
   * Get List of clients from API and transform it to Client Array
   * @returns {Observable<R|T>}
   * @public
   */
  public getClients(): Observable<any> {
      return this.http.get(this._apiUrl)
        .map((response: Response) => response.json())
        .map((resClients: any[]) => resClients.map((resClient: any) => new Client(resClient)))
        .catch(this.handleError);
  }

  /**
   * Get Client by id
   * @param id
   * @returns {Observable<R|T>}
   */
  public getClient(id: number): Observable<any> {
    console.log(id)
    return this.http.get(this._apiUrl + '/' + id)
      .map((response: Response) => response.json())
      .map((resClient: any) => new Client(resClient))
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
