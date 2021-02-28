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

import {Scales, SpeedCalculator} from './speed-calculator';

describe('SpeedCalculator', () => {
  describe('N scale', () => {
    beforeEach(() => {
      this.scale = Scales.N;
    });

    it('zero duration', () => {
      expect(SpeedCalculator.calculate(10, 0, this.scale)).toBe(0);
    });

    it('zero distance', () => {
      expect(SpeedCalculator.calculate(0, 10, this.scale)).toBe(0);
    });

    it('48 inches (n-track single)', () => {
      expect(SpeedCalculator.calculate(48, 10, this.scale)).toBe(43.64);
    });

    it('12 inches (t-trak single)', () => {
      expect(SpeedCalculator.calculate(12, 7, this.scale)).toBe(15.58);
    });
  });

  describe('Other scales', () => {
    it('HO Scale; 48 inches', () => {
      expect(SpeedCalculator.calculate(48, 10, Scales.HO)).toBe(23.75);
    });

    it('O Scale; 48 inches', () => {
      expect(SpeedCalculator.calculate(48, 10, Scales.O)).toBe(13.09);
    });
  });
});
