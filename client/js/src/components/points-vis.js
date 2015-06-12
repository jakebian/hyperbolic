'use strict';
import React from 'react';
import D3CommonUtil from '../util/d3/common';


export class PointsVis extends React.Component {

    propTypes: {
        points: React.PropTypes.array.isRequired
    }

    componentDidMount() {

        D3CommonUtil.getNewD3Vis({
            element: React.findDOMNode(this),
            size: {
                x: '100%',
                y: '300px'
            },
            groupAttrs: {
                class: 'vis-container'
            }
        });
        this.componentDidUpdate();
    }

    componentDidUpdate() {
    }

    render() {
    }
}
