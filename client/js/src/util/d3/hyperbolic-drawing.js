'use strict';
import d3 from 'd3';
import CommonUtil from '../common';

module.exports = {
    updateHyperbolicVis: updateHyperbolicVis
};

const DEFAULT_CONFIG = {
    scale: 200
};

function updateHyperbolicVis({element, data, config}) {

    let getConfig = CommonUtil.getConfigGetter(config, DEFAULT_CONFIG);

    let g = d3.select(element).selectAll(config.gSelector);

    let geodesics = g.selectAll('.geodesic')
        .data(data.arcs);

    // addBaseCircle(g);

    return geodesics.enter()
        .append('path')
        .attr('d',
            arc => getD3Arc(arc, getConfig('scale'))
        )
        .attr('transform',
                arc => getArcGeodesicTransform(arc, getConfig('scale'))
        );

}


/**
 * Private helpers
 */


function getArcGeodesicTransform(arcSpecs, scale) {
    return `translate(${[
        scale * arcSpecs.center.x,
        scale * arcSpecs.center.y
    ]})`;
}

function getD3Arc(arcSpecs, scale) {

    let R = scale * arcSpecs.radius;
    return d3.svg.arc()
        .innerRadius(R - 1)
        .outerRadius(R)
        .startAngle(arcSpecs.range.start - Math.PI / 2)
        .endAngle(arcSpecs.range.end - Math.PI / 2)();

}
