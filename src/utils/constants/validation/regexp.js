export const NAME_PATTERN = new RegExp(/^[a-zA-Zа-яА-я]{1,40}$/);

export const LOGIN_PATTERN = new RegExp(/^[a-z0-9]{3,16}$/);

export const EMAIL_PATTERN = new RegExp(
  /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/);

export const PASSWORD_PATTERN = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,16}$/);