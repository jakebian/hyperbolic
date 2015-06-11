'use strict';

import D3Util from '../util/d3-util';

export class D3Vis {

    constructor() {

    }

    create(el, props, state) {

        let svg = D3Util.insertSvg({
            el: el,
            size: props.size
        });

        svg.append('g').attr('class', 'd3-graph');

        this.update(el, state);
    }

    update(el, state) {
        this.drawPoints(el, state);
    }

    drawPoints(el, state) {

    }
}
