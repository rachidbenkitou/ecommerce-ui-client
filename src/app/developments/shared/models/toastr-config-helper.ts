import { IndividualConfig } from 'ngx-toastr';

export class ToastrConfigHelper {
  static getCustomConfig(): Partial<IndividualConfig> {
    return {
      timeOut: 1500, // Duration to show Toastr notification (1500 milliseconds)
      positionClass: 'toast-top-left', // Position of Toastr notification
      // Add any other custom configuration options here
    };
  }
}
