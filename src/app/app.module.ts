import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { MainViewComponent } from './views/main-view/main-view.component';
import {
    ButtonModule,
    CardModule,
    DropdownModule,
    MessageService,
    ToggleButtonModule,
} from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [
        AppComponent,
        MainViewComponent,
    ],
    entryComponents: [
        MainViewComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        ButtonModule,
        CardModule,
        DropdownModule,
        FormsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        ToastModule,
        ToggleButtonModule,
    ],
    providers: [
        MessageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
