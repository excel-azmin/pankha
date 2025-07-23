"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthModule", {
    enumerable: true,
    get: function() {
        return AuthModule;
    }
});
const _common = require("@nestjs/common");
const _cqrs = require("@nestjs/cqrs");
const _jwt = require("@nestjs/jwt");
const _rediscachemodule = require("../../common/shared/cache/redis-cache.module");
const _eventemittermodule = require("../../common/shared/event-emitter/event-emitter.module");
const _usermodule = require("../user/user.module");
const _command = require("./command");
const _authcontroller = require("./controller/auth.controller");
const _indext = require("./handlers/indext");
const _authservice = require("./service/auth.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AuthModule = class AuthModule {
};
AuthModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _jwt.JwtModule.register({
                secret: process.env.LOGIN_SECRET,
                signOptions: {
                    expiresIn: process.env.LOGIN_EXPIRES_IN
                }
            }),
            (0, _common.forwardRef)(()=>_eventemittermodule.RequestEventEmitterModule),
            _cqrs.CqrsModule,
            _rediscachemodule.RedisCacheModule,
            _usermodule.UserModule
        ],
        controllers: [
            _authcontroller.AuthController
        ],
        providers: [
            _authservice.AuthService,
            ..._command.authCommands,
            ..._indext.authHandlers
        ],
        exports: [
            _authservice.AuthService
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map