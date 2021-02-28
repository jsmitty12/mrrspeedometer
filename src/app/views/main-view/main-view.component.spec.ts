import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainViewComponent } from './main-view.component';

describe('MainViewComponent', () => {
    let component: MainViewComponent;
    let fixture: ComponentFixture<MainViewComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [MainViewComponent],
                schemas: [NO_ERRORS_SCHEMA],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(MainViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
