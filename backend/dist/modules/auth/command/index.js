"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "authCommands", {
    enumerable: true,
    get: function() {
        return authCommands;
    }
});
const _logincommand = require("./login-command");
const _registationcommand = require("./registation-command");
const authCommands = [
    _registationcommand.RegistrationCommand,
    _logincommand.LoginCommand
];

//# sourceMappingURL=index.js.map