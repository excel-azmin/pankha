"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JsonWebTokenService", {
    enumerable: true,
    get: function() {
        return JsonWebTokenService;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _envconfigservice = require("../../config/env/env-config.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let JsonWebTokenService = class JsonWebTokenService {
    async generateRegisterToken(payload) {
        const secret = this.configService.get(_envconfigservice.LOGIN_SECRET);
        const expiresIn = this.configService.get(_envconfigservice.LOGIN_EXPIRES_IN);
        const algorithm = this.configService.get(_envconfigservice.JWT_ALGORITHM);
        return this.jwtService.sign(payload, {
            secret,
            expiresIn,
            algorithm
        });
    }
    async loginToken(payload) {
        const secret = this.configService.get(_envconfigservice.LOGIN_SECRET);
        const expiresIn = this.configService.get(_envconfigservice.LOGIN_EXPIRES_IN);
        const algorithm = this.configService.get(_envconfigservice.JWT_ALGORITHM);
        return this.jwtService.sign(payload, {
            secret,
            expiresIn,
            algorithm
        });
    }
    async verifyLoginToken(token) {
        try {
            const secret = this.configService.get(_envconfigservice.LOGIN_SECRET);
            const payload = await this.jwtService.verifyAsync(token, {
                secret
            });
            return payload;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async generateRefreshToken(email) {
        const secret = this.configService.get(_envconfigservice.REFRESH_SECRET);
        const expiresIn = this.configService.get(_envconfigservice.REFRESH_EXPIRES_IN);
        const algorithm = this.configService.get(_envconfigservice.JWT_ALGORITHM);
        const payload = {
            email
        };
        return this.jwtService.sign(payload, {
            secret,
            expiresIn,
            algorithm
        });
    }
    async verifyRefreshToken(token) {
        try {
            const secret = this.configService.get(_envconfigservice.REFRESH_SECRET);
            const payload = await this.jwtService.verifyAsync(token, {
                secret
            });
            return payload;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async generateWebhookToken(payload) {
        const secret = this.configService.get(_envconfigservice.WEBHOOK_SECRET);
        const algorithm = this.configService.get(_envconfigservice.JWT_ALGORITHM);
        return this.jwtService.sign(payload, {
            secret,
            algorithm
        });
    }
    async verifyWebhookToken(token) {
        try {
            const secret = this.configService.get(_envconfigservice.WEBHOOK_SECRET);
            const payload = await this.jwtService.verifyAsync(token, {
                secret
            });
            return payload;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    constructor(jwtService, configService){
        this.jwtService = jwtService;
        this.configService = configService;
    }
};
JsonWebTokenService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService,
        typeof _envconfigservice.EnvConfigService === "undefined" ? Object : _envconfigservice.EnvConfigService
    ])
], JsonWebTokenService);

//# sourceMappingURL=jsonwebtoken.service.js.map