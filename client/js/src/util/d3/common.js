'use strict';
import d3 from 'd3';
import CommonUtil from '../common';

module.exports = {
    getNewD3Vis: getNewD3Vis
};

const DEFAULT_CONFIG = {
    origin: [500, 0],
    size: {
        x: '100%',
        y: '300px'
    },
    groupAttrs: {
        class: 'vis-container'
    }
};
/**
 * Exposed functions
 */

function getNewD3Vis({element, config}) {

    let getConfig = CommonUtil.getConfigGetter(config, DEFAULT_CONFIG);

    let zoom = d3.behavior.zoom()
        .scale(1)
        .translate(getConfig('origin'))
        .on('zoom', zoomed);


    let container = getInsertedSVG(
            {
                element: element,
                size: getConfig('size')
            }
        )
        .call(zoom)
        .append('g')
        .attr(getConfig('groupAttrs'))
        .attr('transform', `translate(${getConfig('origin')})`);


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
