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
window.SpeedCalculator = {
    SCALE_Z: 220,   // @todo what is this, really?
    SCALE_N: 160,
    SCALE_HO: 87,
    SCALE_S: 1, // @todo what is this, really?
    SCALE_O: 1, // @todo what is this, really?

    /**
     *
     * @param {float} distance in inches
     * @param {float} duration in seconds
     * @param {float} scale
     * @returns {number}
     */
    calculate: function (distance, duration, scale) {
        var scaleInches,
            scaleInchesPerSecond,
            scaleMilesPerSecond,
            scaleMilesPerHour;

        if (distance <= 0 || duration <= 0 || scale <= 0) {
            return 0;
        }

        scaleInches = distance * scale;
        scaleInchesPerSecond = scaleInches / duration;
        scaleMilesPerSecond = scaleInchesPerSecond / 12 / 5280;
        scaleMilesPerHour = scaleMilesPerSecond * 3600;

        return Number.parseFloat(scaleMilesPerHour.toFixed(2));
    }
};
