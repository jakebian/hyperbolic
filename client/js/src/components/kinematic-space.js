'use strict';
import React from 'react';
import {PointsVis} from './points-vis';
import KinematicDrawingUtil from '../util/d3/kinematic-drawing';


export class KinematicSpace extends PointsVis {

    componentDidUpdate() {

        KinematicDrawingUtil.updateKinematicVis({
            element: React.findDOMNode(this),
            data: {
                points: this.props.points
            },
            config: {
                gSelector: '.vis-container'
            }
        });

    }

    render() {

        return <div className="kinematic-vis-container"></div>;

    }
}
