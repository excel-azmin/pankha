"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RegistrationHandler", {
    enumerable: true,
    get: function() {
        return RegistrationHandler;
    }
});
const _cqrs = require("@nestjs/cqrs");
const _jsonwebtokenservice = require("../../../../common/lib/jwt-token/jsonwebtoken.service");
const _rediscacheservice = require("../../../../common/shared/cache/redis-cache.service");
const _userservice = require("../../../user/service/user.service");
const _registrationcommand = require("./registration-command");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let RegistrationHandler = class RegistrationHandler {
    async execute(command) {
        const { firstName, lastName, email } = command.registrationAuthDto;
    }
    constructor(jsonWebTokenService, redisCacheService, userService){
        this.jsonWebTokenService = jsonWebTokenService;
        this.redisCacheService = redisCacheService;
        this.userService = userService;
    }
};
RegistrationHandler = _ts_decorate([
    (0, _cqrs.CommandHandler)(_registrationcommand.RegistrationCommand),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _jsonwebtokenservice.JsonWebTokenService === "undefined" ? Object : _jsonwebtokenservice.JsonWebTokenService,
        typeof _rediscacheservice.RedisCacheService === "undefined" ? Object : _rediscacheservice.RedisCacheService,
        typeof _userservice.UserService === "undefined" ? Object : _userservice.UserService
    ])
], RegistrationHandler);

//# sourceMappingURL=registration-handler.js.map