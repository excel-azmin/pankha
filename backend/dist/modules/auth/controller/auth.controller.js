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
const _common = require("@nestjs/common");
const _cqrs = require("@nestjs/cqrs");
const _swagger = require("@nestjs/swagger");
const _verifyauthguard = require("../../../common/shared/guards/verify-auth.guard");
const _response = require("../../../common/shared/interface/response");
const _logincommand = require("../command/login/login-command");
const _registrationcommand = require("../command/registration/registration-command");
const _verifyregistrationcommand = require("../command/verification/verify-registration-command");
const _loginauthdto = require("../dto/login-auth.dto");
const _registrationauthdto = require("../dto/registration-auth.dto");
const _verifyregistrationauthdto = require("../dto/verify-registration-auth.dto");
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
    async authClerk() {
        return 'authClerk';
    }
    async authRegistration(registrationAuthDto) {
        return await this.commandBus.execute(new _registrationcommand.RegistrationCommand(registrationAuthDto));
    }
    async authRegistrationVerify(verifyRegistrationAuthDto, req) {
        return await this.commandBus.execute(new _verifyregistrationcommand.VerifyRegistrationCommand(verifyRegistrationAuthDto, req.user));
    }
    async authLogin(loginAuthDto) {
        return await this.commandBus.execute(new _logincommand.LoginCommand(loginAuthDto));
    }
    constructor(commandBus){
        this.commandBus = commandBus;
    }
};
_ts_decorate([
    (0, _common.Post)('v1/clerk'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "authClerk", null);
_ts_decorate([
    (0, _common.Post)('v1/registration'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _registrationauthdto.RegistrationAuthDto === "undefined" ? Object : _registrationauthdto.RegistrationAuthDto
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "authRegistration", null);
_ts_decorate([
    (0, _common.Post)('v1/registration/verify'),
    (0, _swagger.ApiBearerAuth)(),
    (0, _common.UseGuards)(_verifyauthguard.OTPVerifyAuthGuard),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _verifyregistrationauthdto.VerifyRegistrationAuthDto === "undefined" ? Object : _verifyregistrationauthdto.VerifyRegistrationAuthDto,
        typeof _response.RequestWithOTP === "undefined" ? Object : _response.RequestWithOTP
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "authRegistrationVerify", null);
_ts_decorate([
    (0, _common.Post)('v1/login'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _loginauthdto.LoginAuthDto === "undefined" ? Object : _loginauthdto.LoginAuthDto
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "authLogin", null);
AuthController = _ts_decorate([
    (0, _common.Controller)('auth'),
    (0, _swagger.ApiTags)('Authentication and Authorization'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _cqrs.CommandBus === "undefined" ? Object : _cqrs.CommandBus
    ])
], AuthController);

//# sourceMappingURL=auth.controller.js.map