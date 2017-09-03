import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: '+clients.component.html',
  styleUrls: ['+clients.component.scss']
})
export class ClientsComponent implements OnInit {

  /**
   *  List of clients
   *  @type {Client[]}
   */
  public clients: Client[];
  /**
   * Error message
   */
  private _errorMessage: string;

  constructor(private _router: Router,
              private _clientsService: ClientsService) { }

  ngOnInit() {
    this._getClients();
  }

  /**
   * Open client's card
   * @param id {number}
   */
  protected openClientCard(id: number) {
    if (id) {
      this._router.navigate(['client', id]);
    }
  }

  /**
   * Open form to create new client
   */
  protected openNewClientCard() {
    this._router.navigate(['client/create']);
  }

  /**
   * Get clients list and save it
   */
  private _getClients() {
    this._clientsService.getClients()
      .subscribe(response => {
          this.clients = response || [];
        },
        error => this._errorMessage = <any>error);
  }
}
