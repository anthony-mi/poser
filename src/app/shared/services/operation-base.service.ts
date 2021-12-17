import { Observable, throwError } from 'rxjs';

import { IndividualConfig, ToastrService } from 'ngx-toastr';

export abstract class OperationBaseService {

  constructor(protected toasterService: ToastrService) {
  }

  protected showSuccessMessage(message: string, title?: string, override?: Partial<IndividualConfig>): void {
    this.toasterService.success(message, title, override);
  }

  protected showErrorMessage$(message: string, title?: string, override?: Partial<IndividualConfig>): Observable<never> {
    this.toasterService.error(message, title, override);

    return throwError(message);
  }
};
