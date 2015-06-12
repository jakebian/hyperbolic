'use strict';

module.exports = {
    getConfigGetter: getConfigGetter
};

function getConfigGetter(config, defaultConfig) {
    return (field) => { return (config && config[field]) || defaultConfig[field]; };
}
