export default interface AuthenticationResult {
  token: string;
  expires: Date;
  refreshToken: string;
}