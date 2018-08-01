import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Scales, SpeedCalculator } from '../../lib/speed-calculator';
import { PreferencesService } from '../../services/preferences.service';
import { Preferences } from '../../models/preferences';

@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
    scales: SelectItem[] = [
        {
            label: `N (1:${Scales.N})`,
            value: Scales.N
        },
        {
            label: `HO (1:${Scales.HO})`,
            value: Scales.HO
        },
        {
            label: `O (1:${Scales.O})`,
            value: Scales.O
        }
    ];
    distances: SelectItem[] = [
        {
            label: `N-trak (48")`,
            value: 48
        },
        {
            label: `T-trak single (12")`,
            value: 12
        },
        {
            label: `T-trak double (24")`,
            value: 24
        }
    ];

    timerRunning = false;

    scale: number;
    distance: number;
    startTime: number;
    time: number = 1;
    speed: number = 0;

    constructor(
        private preferencesSvc: PreferencesService
    ) { }

    ngOnInit() {
        const preferences = this.preferencesSvc.load();

        this.distance = preferences.distance || 12;
        this.scale = preferences.scale || Scales.N;
    }

    toggleTimer(event) {
        if (event.checked) {
            this.startTime = Date.now();
            this.timerFunction();
        } else {
            this.calculateElapsedTime();
            this.calculateSpeed();
        }
    }

    timerFunction() {
        this.calculateElapsedTime();
        this.calculateSpeed();

        if (this.timerRunning) {
            window.setTimeout(() => {
                this.timerFunction();
            }, 100);
        }
    }

    savePreferences() {
        this.preferencesSvc.save({
            distance: this.distance,
            scale: this.scale
        });
    }

    private calculateSpeed() {
        this.speed = SpeedCalculator.calculate(this.distance, this.time, this.scale);
    }

    private calculateElapsedTime() {
        this.time = (Date.now() - this.startTime) / 1000;
    }
}
