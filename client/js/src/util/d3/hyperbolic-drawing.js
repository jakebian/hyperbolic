'use strict';
import d3 from 'd3';

module.exports = {
    updateHyperbolicVis: updateHyperbolicVis
};


function updateHyperbolicVis({element, data, config}) {

    let g = d3.select(element).selectAll(config.gSelector);

    let geodesics = g.selectAll('.geodesic')
        .data(data.arcs);

    // addBaseCircle(g);

    return geodesics.enter()
        .append('path')
        .attr('d', getD3Arc)
        .attr('transform', getArcGeodesicTransform);

}


/**
 * Private helpers
 */


function getArcGeodesicTransform(arcSpecs) {
    var R = 300;
    return `translate(${[R * arcSpecs.center.x, R * arcSpecs.center.y]})`;
}

function getD3Arc(arcSpecs) {

    var R = 300 * arcSpecs.radius;

    return d3.svg.arc()
        .innerRadius(R - 1)
        .outerRadius(R)
        .startAngle(arcSpecs.range.start - Math.PI / 2)
        .endAngle(arcSpecs.range.end - Math.PI / 2)();
}



