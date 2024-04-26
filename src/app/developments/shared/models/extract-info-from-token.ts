import {IndividualConfig} from "ngx-toastr";

export class ExtractInfoFromToken {
  static extractInfoFromToken(token: string): string {

    // Decode the access token to get user information
    const tokenParts =token.split('.');
    const tokenPayload = JSON.parse(atob(tokenParts[1]));
    const preferredUsername = tokenPayload.preferred_username.split(':')[0];

    return tokenPayload;
  }

  static extractUsernameFromToken(token: string): string {

    // Decode the access token to get user information
    const tokenParts =token.split('.');
    const tokenPayload = JSON.parse(atob(tokenParts[1]));
    const preferredUsername = tokenPayload.preferred_username.split(':')[0];
    return preferredUsername;
  }
}
