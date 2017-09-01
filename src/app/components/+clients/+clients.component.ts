import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client';
import { Router } from '@angular/router';

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
   * @param id{number}
   */
  protected openClientCard(id: number) {
    this._router.navigate(['client', id]);
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
