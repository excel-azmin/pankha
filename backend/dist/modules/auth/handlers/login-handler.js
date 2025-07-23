"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoginHandler", {
    enumerable: true,
    get: function() {
        return LoginHandler;
    }
});
const _cqrs = require("@nestjs/cqrs");
const _jsonwebtokenservice = require("../../../common/lib/jwt-token/jsonwebtoken.service");
const _userservice = require("../../user/service/user.service");
const _logincommand = require("../command/login-command");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let LoginHandler = class LoginHandler {
    async execute(command) {
        const { email, password } = command.loginAuthDto;
    }
    constructor(userService, jsonWebTokenService){
        this.userService = userService;
        this.jsonWebTokenService = jsonWebTokenService;
    }
};
LoginHandler = _ts_decorate([
    (0, _cqrs.CommandHandler)(_logincommand.LoginCommand),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userservice.UserService === "undefined" ? Object : _userservice.UserService,
        typeof _jsonwebtokenservice.JsonWebTokenService === "undefined" ? Object : _jsonwebtokenservice.JsonWebTokenService
    ])
], LoginHandler);

//# sourceMappingURL=login-handler.js.map