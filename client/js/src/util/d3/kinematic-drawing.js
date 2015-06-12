'use strict';
import d3 from 'd3';
import CommonUtil from '../common';

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

    let getConfig = CommonUtil.getConfigGetter(config, DEFAULT_CONFIG);

    let g = d3.select(element).selectAll(config.gSelector);

    let kinematicPoints = g.selectAll('.kinematic-point')
        .data(data.points);

    return kinematicPoints.enter()
            .append('circle')
            .attr('cx', (point) => point.u * getConfig('scale'))
            .attr('cy', (point) => point.v * getConfig('scale'))
            .attr('r', getConfig('radius'));
}

