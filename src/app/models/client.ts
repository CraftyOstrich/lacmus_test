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
  public birthDate: Date;
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
    this.birthDay = client.birthDay;
    this.birthMonth = client.birthMonth;
    this.birthYear = client.birthYear;
    this.birthDate = this._getBirthdayDate(client.birthDay, client.birthMonth, client.birthYear);
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

  /**
   *  Return clien's birthday as new Date
   * @param date {number}
   * @param month {number}
   * @param year {number}
   * @returns {Date}
   * @private
   */
  private _getBirthdayDate(date: number, month: number, year: number) {
    if (!date || !month || !year) {
      return null;
    } else {
      return new Date(year, month - 1, date)
    }
  }
}
