'use strict';

/**
 * Config
 */

let PORT = 2000;

/**
 * External dependency
 */

let express = require('express');
let path = require('path');

/**
 * Application
 */

let app = express();

app.use('/', express.static(path.resolve('client')));


/**
 * Start
 */

app.listen(
    PORT,
    () => console.log(`launched on port ${PORT}`)
);
