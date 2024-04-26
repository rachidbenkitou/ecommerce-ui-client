import {IndividualConfig, ToastrService} from 'ngx-toastr';

export class ToastrConfigHelper {
  constructor(private toastr: ToastrService) {
  }

  static getCustomConfig(): Partial<IndividualConfig> {
    return {
      timeOut: 2500, // Duration to show Toastr notification (1500 milliseconds)
      positionClass: 'toast-top-left', // Position of Toastr notification
      // Add any other custom configuration options here
    };
  }
}
