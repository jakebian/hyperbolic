'use strict';
import d3 from 'd3';

module.exports = {
    getNewD3Vis: getNewD3Vis,
    updateKinematicVis: updateKinematicVis,
    updateHyperbolicVis: updateHyperbolicVis
};

/**
 * Exposed functions
 */

function getNewD3Vis({element, size, groupAttrs}) {

    var zoom = d3.behavior.zoom()
        .scale(1)
        .on('zoom', zoomed);

    var container = getInsertedSVG({element, size})
            .call(zoom)
            .append('g')
            .attr(groupAttrs);

    return container;

    function zoomed() {
        container.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')');
    }

}

function updateKinematicVis({element, data}) {

}

function updateHyperbolicVis({element, data, gSelector}) {

    console.log('updating', data);

    var g = d3.select(element).selectAll(gSelector);

    addBaseCircle(g);

    var geodesics = g.selectAll('.geodesic')
        .data(data.arcs);

    return geodesics.enter()
        .append('path')
        .attr('d', getD3Arc)
        .attr('transform', getArcGeodesicTransform);

}


/**
 * Private helpers
 */

function getInsertedSVG({element, size}) {

    return d3.select(element).append('svg')
        .attr('class', 'd3')
        .attr('width', size.x)
        .attr('height', size.y);

}

function addBaseCircle(g) {
    g.append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 210)
        .style('fill', '#eeeeee');
}

function getArcGeodesicTransform(arcSpecs) {
    var R = 200;
    return 'translate(' + R * arcSpecs.center.x + ',' + R * arcSpecs.center.y + ')';
}

function getD3Arc(arcSpecs) {

    var R = 200 * arcSpecs.radius;

    return d3.svg.arc()
        .innerRadius(R - 1)
        .outerRadius(R)
        .startAngle(arcSpecs.range.start - Math.PI / 2)
        .endAngle(arcSpecs.range.end - Math.PI / 2)();
}

