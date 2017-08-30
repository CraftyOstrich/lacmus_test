import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: '+clients.component.html',
  styleUrls: ['+clients.component.scss']
})
export class ClientsComponent implements OnInit {
  /**
   *  List of clients
   *  @type {Client Array}
   */
  protected _clients: Client[];
  /**
   * Error message
   */
  private _errorMessage: string;
  constructor(private _clientsService: ClientsService) { }

  ngOnInit() {
    this._getClients();
  }

  /**
   * Get Full Birth Day (day.month.year)
   * @param client {Client}
   * @returns BirthDay {string}
   * @protected
   */
  protected _getBirthdayDate(client: Client) {
    if (!client.birthDay || !client.birthMonth || !client.birthYear) {
      return '-'
    } else {
      let setZeroToDate = (n) => n.toString().length === 1 ? '0' + n : n.toString();
      return setZeroToDate(client.birthDay) + '.' +
             setZeroToDate(client.birthMonth) + '.' + client.birthYear
    }
}
  /**
   * Get clients list and save it
   */
  private _getClients() {
    this._clientsService.getClients()
      .subscribe(response => {
          this._clients = response || [];
          console.log(this._clients)
        },
        error => this._errorMessage = <any>error);
  }
}
