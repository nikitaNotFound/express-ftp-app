import AuthenticationResult from "./models/authentication-result.model";

export const authenticate = (): AuthenticationResult => {
  return {
    token: 'bebrra',
    expires: new Date(),
    refreshToken: 'bebra but refresh'
  };
}

export const logout = () => {
  return;
}