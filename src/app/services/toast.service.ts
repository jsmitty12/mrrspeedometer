import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    readonly timeout = 7000;

    constructor(
        private messageSvc: MessageService
    ) { }

    success(title: string, message: string = ''): void {
        this.messageSvc.add({
            severity: 'success',
            summary: title,
            detail: message,
            life: this.timeout,
        });
    }
}
