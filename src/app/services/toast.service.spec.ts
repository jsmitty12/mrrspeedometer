import { TestBed, inject } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { MessageService } from 'primeng/api';

import { mock, instance, verify } from 'ts-mockito';

describe('ToastService', () => {
    let service: ToastService;

    const messageSvcMock = mock(MessageService);

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ToastService,
                { provide: MessageService, useFactory: () => instance(MessageService) }
            ]
        });

        service = TestBed.get(ToastService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('success', () => {
        it('should create a message with severity `success`', () => {
            service.success('title');

            verify(messageSvcMock.add).called();
        });
    });
});
