'use strict';
import d3 from 'd3';

module.exports = {
    updateKinematicVis: updateKinematicVis
};

const DEFAULT_CONFIG = {
    scale: 30,
    radius: 5
};

/**
 * Exposed functions
 */

function updateKinematicVis({element, data, config}) {

    let g = d3.select(element).selectAll(config.gSelector);

    let kinematicPoints = g.selectAll('.kinematic-point')
        .data(data.points);

    return kinematicPoints.enter()
            .append('circle')
            .attr('cx', (point) => point.u * getConfig(config, 'scale'))
            .attr('cy', (point) => point.v * getConfig(config, 'scale'))
            .attr('r', getConfig(config, 'radius'));
}

function getConfig(config, field) {
    return config[field] || DEFAULT_CONFIG[field];
}
