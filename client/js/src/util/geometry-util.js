'use strict';

module.exports = {
    getArc: getArc
};

/**
 * Exposed functions
 */

function getArc({u, v}) {
    return getArcFromAngularCoords(getAngularCoords({u, v}));
}

/**
 * Private Helpers
 */

function getArcFromAngularCoords({alpha, theta}) {
    console.log({alpha, theta});

    let centerDistance = 1 / Math.cos(alpha);
    let radius = centerDistance - Math.cos(alpha);

    return {
        radius: radius,
        center: {
            x: centerDistance * Math.cos(theta),
            y: centerDistance * Math.sin(theta)
        },
        range: {
            start: theta - (Math.PI / 2 - alpha),
            end: theta + (Math.PI / 2 - alpha)
        }
    };

}

function getAngularCoords({u, v}) {
    return {
        alpha: Math.abs((u - v) / 2),
        theta: (u + v) / 2
    };
}
