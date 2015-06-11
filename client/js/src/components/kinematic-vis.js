'use strict';
import React from 'react';

import {KinematicSpace} from './kinematic-space';
import {HyperbolicSpace} from './hyperbolic-space';

export class KinematicVis extends React.Component {

    render() {
        return (
            <div>
                <KinematicSpace />
                <HyperbolicSpace />
            </div>
        );
    }

}
