"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthController", {
    enumerable: true,
    get: function() {
        return AuthController;
    }
});
const _backend = require("@clerk/backend");
const _common = require("@nestjs/common");
const _cqrs = require("@nestjs/cqrs");
const _swagger = require("@nestjs/swagger");
const _currentuserdecorator = require("../../../common/shared/decorator/current-user.decorator");
const _clerkauthguard = require("../../../common/shared/guards/clerk-auth.guard");
const _registrationcommand = require("../command/registration/registration-command");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let AuthController = class AuthController {
    async authClerk(user) {
        console.log('Syncing user with backend...', user);
        return await this.commandBus.execute(new _registrationcommand.RegistrationCommand(user));
    }
    constructor(commandBus){
        this.commandBus = commandBus;
    }
};
_ts_decorate([
    (0, _common.UseGuards)(_clerkauthguard.ClerkAuthGuard),
    (0, _common.Get)('v1/sync'),
    _ts_param(0, (0, _currentuserdecorator.CurrentUser)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _backend.User === "undefined" ? Object : _backend.User
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "authClerk", null);
AuthController = _ts_decorate([
    (0, _common.Controller)('auth'),
    (0, _swagger.ApiTags)('Authentication and Authorization'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _cqrs.CommandBus === "undefined" ? Object : _cqrs.CommandBus
    ])
], AuthController);

//# sourceMappingURL=auth.controller.js.map