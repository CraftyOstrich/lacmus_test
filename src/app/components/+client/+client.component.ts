import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../../models/client';
import { ClientsService } from '../../services/clients.service';
import { emailValidator, phoneValidator } from '../../app.constants';

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
  public clientForm: FormGroup = null;

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
               private _router: Router,
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
          this.client = new Client();
          this.setUpClientForm(this.client)
        }

      },
      error => this._errorMessage = <any>error);
  }

  /**
   * Set up form for client and disabled field if client exist
   * @param client
   */
  protected setUpClientForm(client: Client) {
    this.clientForm = this._formBuilder.group({
      'name': [client.name || '', [
        Validators.required
      ]],
      'gender': [client.genderOrigin || '', [
        Validators.required
      ]],
      'date': [client.birthDateObject  || {}, [
        Validators.required
      ]],
      'phone': [client.phone || '', [
        Validators.pattern(this.phoneValidator),
        Validators.required

      ]],
      'email': [client.email || '', [
        Validators.required,
        Validators.pattern(this.emailValidator)
      ]],
      'address': [client.address || '', [
        Validators.required
      ]],
      'description': [client.description || '']
    });
    if (client.id) {
      for(let prop in this.clientForm.controls){
        this.clientForm.controls[prop].disable({onlySelf: true })
      }
    }
  }

  /**
   * Create new Client snd post it to API, redirect mo main page
   */
  protected createClient() {
    if (this.clientForm.invalid) {
    } else {
      let newClient = {
        ...this.clientForm.value,
        birthYear: this.clientForm.value.date.date.year,
        birthMonth: this.clientForm.value.date.date.month,
        birthDay: this.clientForm.value.date.date.day
      };
      delete newClient.date;

      this._clientsService.postNewClient(newClient)
        .subscribe(response => this._router.navigate((['clients'])));
    }
  }

}
