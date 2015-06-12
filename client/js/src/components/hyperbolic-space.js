'use strict';
import React from 'react';
import {PointsVis} from './points-vis';

import HyperbolicDrawingUtil from '../util/d3/hyperbolic-drawing';
import GeometryUtil from '../util/geometry-util';


export class HyperbolicSpace extends PointsVis {

    componentDidUpdate() {

        HyperbolicDrawingUtil.updateHyperbolicVis({

            element: React.findDOMNode(this),
            data: {
                arcs: this.props.points.map(GeometryUtil.getArc)
            },
            config: {
                gSelector: '.vis-container'
            }

        });

    }

    render() {

        return <div className="hyperbolic-vis-container"></div>;

    }
}
