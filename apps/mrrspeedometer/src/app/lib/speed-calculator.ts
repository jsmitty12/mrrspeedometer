/**
 * Model Railroad Speedometer
 * Copyright (C) 2017  Joshua Smith <jsmith@jssm.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export class SpeedCalculator {
    // @see https://en.wikipedia.org/wiki/List_of_rail_transport_modelling_scale_standards#NMRA

    public static calculate(
        distance: number,
        duration: number,
        scale: Scales
    ): number {
        if (distance <= 0 || duration <= 0 || scale <= 0) {
            return 0;
        }

        const scaleInches = distance * scale;
        const scaleInchesPerSecond = scaleInches / duration;
        const scaleMilesPerSecond = scaleInchesPerSecond / 12 / 5280;
        const scaleMilesPerHour = scaleMilesPerSecond * 3600;

        return parseFloat(scaleMilesPerHour.toFixed(2));
    }
}

export enum Scales {
    Z = 220,
    N = 160,
    HO = 87.1,
    O = 48,
}
