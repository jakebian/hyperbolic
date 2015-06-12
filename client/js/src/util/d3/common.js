'use strict';
import d3 from 'd3';

module.exports = {
    getNewD3Vis: getNewD3Vis
};

/**
 * Exposed functions
 */

function getNewD3Vis({element, size, groupAttrs}) {

    var origin = [500, 0];
    var zoom = d3.behavior.zoom()
        .scale(1)
        .translate(origin)
        .on('zoom', zoomed);


    var container = getInsertedSVG({element, size})
            .call(zoom)
            .append('g')
            .attr(groupAttrs)
            .attr('transform', `translate(${origin})`);


    return container;

    function zoomed() {
        container.attr('transform',
            `translate(${d3.event.translate})` +
            `scale(${d3.event.scale})`
        );
    }

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
