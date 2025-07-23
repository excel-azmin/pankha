"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VerifyRegistrationHandler", {
    enumerable: true,
    get: function() {
        return VerifyRegistrationHandler;
    }
});
const _cqrs = require("@nestjs/cqrs");
const _rediscacheprefixconstants = require("../../../common/constants/redis-cache-prefix-constants");
const _jsonwebtokenservice = require("../../../common/lib/jwt-token/jsonwebtoken.service");
const _rediscacheservice = require("../../../common/shared/cache/redis-cache.service");
const _userservice = require("../../user/service/user.service");
const _verifyregistationcommand = require("../command/verify-registation-command");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let VerifyRegistrationHandler = class VerifyRegistrationHandler {
    async execute(command) {
        try {
            const { email } = command.user;
            const { otp } = command.verifyRegistrationAuthDto;
            const getVerifyingUser = await this.redisCacheService.getCacheValue(_rediscacheprefixconstants.USER_REGISTRATION_CACHE_PREFIX, email);
            if (!getVerifyingUser) {
                return {
                    message: 'The registration process time has expired.',
                    statusCode: 404
                };
            }
            if (getVerifyingUser.otp !== otp) {
                return {
                    message: 'Invalid OTP provided.',
                    statusCode: 400
                };
            }
            const user = await this.userService.createUser(getVerifyingUser);
            const [access_token, refreshToken] = await Promise.all([
                this.jsonWebTokenService.loginToken(getVerifyingUser),
                this.jsonWebTokenService.generateRefreshToken(getVerifyingUser)
            ]);
            return {
                message: 'OTP verified successfully. User registered.',
                statusCode: 200,
                access_token,
                refreshToken,
                user
            };
        } catch (error) {
            return error;
        }
    }
    constructor(jsonWebTokenService, redisCacheService, userService){
        this.jsonWebTokenService = jsonWebTokenService;
        this.redisCacheService = redisCacheService;
        this.userService = userService;
    }
};
VerifyRegistrationHandler = _ts_decorate([
    (0, _cqrs.CommandHandler)(_verifyregistationcommand.VerifyRegistrationCommand),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _jsonwebtokenservice.JsonWebTokenService === "undefined" ? Object : _jsonwebtokenservice.JsonWebTokenService,
        typeof _rediscacheservice.RedisCacheService === "undefined" ? Object : _rediscacheservice.RedisCacheService,
        typeof _userservice.UserService === "undefined" ? Object : _userservice.UserService
    ])
], VerifyRegistrationHandler);

//# sourceMappingURL=verify-registation-handler.js.map