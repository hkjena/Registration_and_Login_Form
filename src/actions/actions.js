import {
  LOGIN_USERNAME_CHANGE,
  LOGIN_PASSWORD_CHANGE,
  REGISTER_NAME_CHANGE,
  REGISTER_EMAIL_CHANGE,
  REGISTER_PASSWORD_CHANGE
} from "../constants";

export const onLoginNameChange = payload => ({
  type: LOGIN_USERNAME_CHANGE,
  payload
});

export const onLoginPasswordChange = payload => ({
  type: LOGIN_PASSWORD_CHANGE,
  payload
});

export const onRegNameChange = payload => ({
  type: REGISTER_NAME_CHANGE,
  payload
});

export const onRegMailChange = payload => ({
  type: REGISTER_EMAIL_CHANGE,
  payload
});

export const onRegPasswordChange = payload => ({
  type: REGISTER_PASSWORD_CHANGE,
  payload
});
