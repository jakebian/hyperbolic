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
                    u: -Math.PI / 4,
                    v: Math.PI / 4
                },
                {
                    u: -Math.PI / 8,
                    v: Math.PI / 8
                },
                {
                    u: Math.PI / 2,
                    v: Math.PI / 3
                },
                {
                    u: -Math.PI / 4,
                    v: +Math.PI / 8
                },
                {
                    u: 3 * Math.PI / 2,
                    v: 2 * Math.PI
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
