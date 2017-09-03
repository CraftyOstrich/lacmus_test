/**
 * Created by svitlanamishchuk on 8/30/17.
 */

export class Client {
  public id?: number = null;
  public name: string = '';
  public cardNumber?: number = null;
  public genderOrigin: string = '';
  public gender: string = '';
  public birthYear: number = null;
  public birthMonth: number = null;
  public birthDay: number = null;
  public birthDate: Date = new Date();
  public birthDateObject: {} = {};
  public phone: string = '';
  public email: string = '';
  public address: string = '';
  public additionalPhone?: string = '';
  public contactPerson?: string = '';
  public howDidYouKnowAnother?: any = null;
  public howDidYouKnowId?: any = null;
  public additionalInfo?: string = '';
  public cardAvailability?: boolean = true;
  public description: string = '';
  public tabNumber?: number = null;
  public divisionNumber?: number = null;
  public accountId?: number = null;

  constructor (client?: Client) {
    if (client) {
      this.id = client.id;
      this.name = client.name;
      this.cardNumber = client.cardNumber;
      this.genderOrigin = client.gender;
      this.gender = client.gender === 'male' ? 'Мужской' : (client.gender === 'female') ? 'Женский' : null;
      this.birthDay = client.birthDay;
      this.birthMonth = client.birthMonth;
      this.birthYear = client.birthYear;
      this.birthDate = this._getBirthdayDate(client.birthDay, client.birthMonth, client.birthYear);
      this.birthDateObject = this._getBirthdayDateObject(client.birthDay, client.birthMonth, client.birthYear);
      this.phone = client.phone;
      this.email = client.email;
      this.address = client.address;
      this.additionalPhone = client.additionalPhone;
      this.contactPerson = client.contactPerson;
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

  /**
   *  Return client's birthday as new Date
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

  /**
   * Return client's birthday as Object
   * @param date {number}
   * @param month {number}
   * @param year {number}
   * @returns {any}
   * @private
   */
  private _getBirthdayDateObject(date: number, month: number, year: number) {
    if (!date || !month || !year) {
      return {};
    } else {
      return {
        date: {
          year: year,
          month: month,
          day: date
        }
      }
    }

  }
}
