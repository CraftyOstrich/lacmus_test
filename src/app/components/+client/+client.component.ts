import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/client';
import { ClientsService } from '../../services/clients.service';
import { emailValidator, phoneValidator, dateValidator } from '../../app.constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: '+client.component.html',
  styleUrls: ['+client.component.scss']
})
export class ClientComponent implements OnInit {
  /**
   * Client
   * @type {Client}
   */
  public client: Client;

  /**
   *
   */
  public clientForm: FormGroup;

  /**
   * Validator for client's email
   * @type {RegExp}
   */
  protected emailValidator = emailValidator;

  /**
   * Validator for client's phone
   * @type {RegExp}
   */
  protected phoneValidator = phoneValidator;

  /**
   * Error message
   * @type {string}
   */
  private _errorMessage: string;

  constructor( private _route: ActivatedRoute,
               private _formBuilder: FormBuilder,
               private _clientsService: ClientsService ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        const id = +params['id'];
        if (id) {
          this._clientsService.getClient(id)
            .subscribe(response => {
              this.client = response ;
              this.setUpClientForm(this.client);
            });
        } else {
        }

      },
      error => this._errorMessage = <any>error);
  }

  /**
   * Set up form for client and disabled field if client exist
   * @param client
   */
  setUpClientForm(client: Client) {
    this.clientForm = this._formBuilder.group({
      'id': [client.id],
      'name': [client.name || '', [
        Validators.required
      ]],
      'gender': [client.gender, [
        Validators.required
      ]],
      'date': [client.birthDate || new Date()],
      'phone': [client.phone, [
        Validators.pattern(this.phoneValidator)
      ]],
      'email': [client.email || '', [
        Validators.required,
        Validators.pattern(this.emailValidator)
      ]],
      'address': [client.address],
      'description': [client.description]
    });
    if (client) {
      for(let prop in this.clientForm.controls){
        this.clientForm.controls[prop].disable({onlySelf: true })
      }
    }
  }

}
