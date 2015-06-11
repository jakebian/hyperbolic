'use strict';
import d3 from 'd3';

module.exports = {
    D3Util: {
        insertSvg: ({el, size}) => {
            d3.select(el).append('svg')
                .attr('class', 'd3')
                .attr('width', size.x)
                .attr('height', size.y);
        }
    }
};
