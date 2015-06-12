'use strict';
import React from 'react';

import {KinematicSpace} from './kinematic-space';
import {HyperbolicSpace} from './hyperbolic-space';

export class KinematicVis extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            points: [
                {
                    u: -Math.PI / 2.2,
                    v: Math.PI / 2.2
                },
                {
                    u: Math.PI / 4,
                    v: 3 * Math.PI / 4
                },
                {
                    u: 3 * Math.PI / 4,
                    v: 5 * Math.PI / 4
                },
                {
                    u: 5 * Math.PI / 4,
                    v: 7 * Math.PI / 4
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <KinematicSpace />
                <HyperbolicSpace points={this.state.points}/>
            </div>
        );
    }

}
