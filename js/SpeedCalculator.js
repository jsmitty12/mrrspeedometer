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
