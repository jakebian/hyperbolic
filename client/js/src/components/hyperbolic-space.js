'use strict';
import React from 'react';
import D3Util from '../util/d3-util';
import GeometryUtil from '../util/geometry-util';


export class HyperbolicSpace extends React.Component {

    propTypes: {
        points: React.PropTypes.array.isRequired
    }

    componentDidMount() {

        D3Util.getNewD3Vis({
            element: React.findDOMNode(this),
            size: {
                x: '100%',
                y: '300px'
            },
            groupAttrs: {
                class: 'hyperbolic-vis'
            }
        });

        this.componentDidUpdate();

    }

    componentDidUpdate() {


        D3Util.updateHyperbolicVis({
            element: React.findDOMNode(this),
            data: {
                arcs: this.props.points.map(GeometryUtil.getArc)
            },
            gSelector: '.hyperbolic-vis'
        });

    }

    render() {

        return (
            <div className="hyperbolic-vis-container"></div>
        );

    }
}
