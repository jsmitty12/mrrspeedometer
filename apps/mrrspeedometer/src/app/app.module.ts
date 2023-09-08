import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { MainViewComponent } from './views/main-view/main-view.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';

@NgModule({
    declarations: [AppComponent, MainViewComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
        MatSelectModule,
        MatButtonToggleModule,
        MatCardModule,
        MatSnackBarModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
