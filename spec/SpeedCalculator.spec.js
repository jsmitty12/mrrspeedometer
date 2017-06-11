describe('SpeedCalculator calculates', function () {
    'use strict';

    describe('N scale', function () {
        beforeEach(function () {
            this.scale = SpeedCalculator.SCALE_N;
        });

        it('zero duration', function () {
            expect(SpeedCalculator.calculate(10, 0, this.scale)).toBe(0);
        });

        it('zero distance', function () {
            expect(SpeedCalculator.calculate(0, 10, this.scale)).toBe(0);
        });

        it('48 inches (n-track single)', function () {
            expect(SpeedCalculator.calculate(48, 10, this.scale)).toBe(43.64);
        });

        it('12 inches (t-trak single)', function () {
            expect(SpeedCalculator.calculate(12, 7, this.scale)).toBe(15.58);
        });
    });

    describe('HO scale', function () {
        beforeEach(function () {
            this.scale = SpeedCalculator.SCALE_HO;
        });

        it('zero duration', function () {
            expect(SpeedCalculator.calculate(10, 0, this.scale)).toBe(0);
        });

        it('zero distance', function () {
            expect(SpeedCalculator.calculate(0, 10, this.scale)).toBe(0);
        });

        it('48 inches', function () {
            expect(SpeedCalculator.calculate(48, 10, this.scale)).toBe(23.73);
        });

        it('12 inches', function () {
            expect(SpeedCalculator.calculate(12, 7, this.scale)).toBe(8.47);
        });
    });

    describe('O scale', function () {
        beforeEach(function () {
            this.scale = SpeedCalculator.SCALE_O;
        });

        it('zero duration', function () {
            expect(SpeedCalculator.calculate(10, 0, this.scale)).toBe(0);
        });

        it('zero distance', function () {
            expect(SpeedCalculator.calculate(0, 10, this.scale)).toBe(0);
        });

        it('48 inches', function () {
            expect(SpeedCalculator.calculate(48, 10, this.scale)).toBe(0);
        });

        it('12 inches', function () {
            expect(SpeedCalculator.calculate(12, 7, this.scale)).toBe(0);
        });
    });
});
