"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getRmqHost", {
    enumerable: true,
    get: function() {
        return getRmqHost;
    }
});
const _envconfigservice = require("../env/env-config.service");
const config = new _envconfigservice.EnvConfigService();
function getRmqHost() {
    return 'config.get(RMQ_HOST)';
}

//# sourceMappingURL=rmq.connection.js.map