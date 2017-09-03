/**
 * Created by svitlanamishchuk on 8/31/17.
 */
export const emailValidator: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const phoneValidator: RegExp = /^(([0-9]{3})[-]?)*[0-9]{6,7}$/;
