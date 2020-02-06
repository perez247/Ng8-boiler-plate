import { ErrorHandler, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NotifyService } from '../services/common/notify/notify.service';

export class AppErrorHandler implements ErrorHandler {

    constructor(@Inject(NotifyService) private toastService: NotifyService) {}

    handleError(error: string): void {
        this.toastService.error(error);

        if (!environment.production) {
            console.log(error);
        }
    }

}
