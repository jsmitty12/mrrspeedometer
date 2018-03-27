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

    scale: number;
    distance: number;
    time: number = 1;
    speed: number = 0;

    calculateSpeed() {
        this.speed = SpeedCalculator.calculate(this.distance, this.time, this.scale);
    }
}
