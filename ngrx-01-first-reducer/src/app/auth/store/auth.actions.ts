import { Action } from "@ngrx/store";

export const LOGIN_START = "LOGIN START";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SIGNUP_START = "SIGNUP START";
export const CLEAR_ERROR = "CLEAR ERROR";
export const AUTO_LOGIN = "AUTO LOGIN";

export class Login implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
      redirect: boolean;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: string) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions =
  | Login
  | Logout
  | LoginStart
  | LoginFail
  | SignupStart
  | ClearError
  | AutoLogin;
