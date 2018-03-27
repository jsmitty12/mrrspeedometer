import {Component} from '@angular/core';
import {SelectItem} from "primeng/api";
import {Scales, SpeedCalculator} from "../../../lib/speed-calculator";

@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
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

    calculateSpeed(event) {
        if (event.checked) {
            this.startTime = Date.now();
            this.speed = null;

            window.setTimeout(() => {
                this.timerFunction();
            }, 100);
        } else {
            this.calculateElapsedTime();
            this.speed = SpeedCalculator.calculate(this.distance, this.time, this.scale);
        }
    }

    timerFunction() {
        this.calculateElapsedTime();

        if (this.timerRunning) {
            window.setTimeout(() => {
                this.timerFunction();
            }, 100);
        }
    }

    private calculateElapsedTime() {
        this.time = (Date.now() - this.startTime) / 1000;
    }
}
