/**
 * Created by svitlanamishchuk on 8/30/17.
 */
export class Client {
  public id: number;
  public name: string;
  public cardNumber: number;
  public gender: string;
  public birthYear: number;
  public birthMonth: number;
  public birthDay: number;
  public phone: string;
  public email: string;
  public address: string;
  public additionalPhone: string;
  public contactPerson: string ;
  public howDidYouKnowAnother: any;
  public howDidYouKnowId: any;
  public additionalInfo: string;
  public cardAvailability: boolean;
  public description: string;
  public tabNumber: number;
  public divisionNumber: number;
  public accountId: number;

  constructor (client: Client) {
    this.id = client.id;
    this.name = client.name;
    this.cardNumber = client.cardNumber;
    this.gender = client.gender;
    this.birthYear = client.birthYear;
    this.birthMonth = client.birthMonth;
    this.birthDay = client.birthDay;
    this.phone = client.phone;
    this.email = client.email;
    this.address = client.address;
    this.additionalPhone = client.additionalPhone;
    this.contactPerson = client.contactPerson ;
    this.howDidYouKnowAnother = client.howDidYouKnowAnother;
    this.howDidYouKnowId = client.howDidYouKnowId;
    this.additionalInfo = client.additionalInfo;
    this.cardAvailability = client.cardAvailability;
    this.description = client.description;
    this.tabNumber = client.tabNumber;
    this.divisionNumber = client.divisionNumber;
    this.accountId = client.accountId;
  }
}
