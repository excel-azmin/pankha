"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OTPVerifyAuthGuard", {
    enumerable: true,
    get: function() {
        return OTPVerifyAuthGuard;
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
let OTPVerifyAuthGuard = class OTPVerifyAuthGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['authorization']?.split(' ')[1];
        if (!token) {
            throw new _common.UnauthorizedException('No token provided. Please include a token in the Authorization header.');
        }
        try {
            // Secret is fetched from the environment variable
            const secret = this.configService.get('LOGIN_SECRET');
            // Verify the token
            const decoded = await this.jwtService.verifyAsync(token, {
                secret
            });
            // Attach the user info to the request for further processing
            request.user = decoded;
            this.logger.log(`User ${decoded.email} is authenticated.`);
            return true; // Return true when the token is valid
        } catch (error) {
            this.logger.error('Invalid token or token expired');
            throw new _common.UnauthorizedException('Invalid token or token expired.');
        }
    }
    constructor(jwtService, configService){
        this.jwtService = jwtService;
        this.configService = configService;
        this.logger = new _common.Logger(OTPVerifyAuthGuard.name);
    }
};
OTPVerifyAuthGuard = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService,
        typeof _envconfigservice.EnvConfigService === "undefined" ? Object : _envconfigservice.EnvConfigService
    ])
], OTPVerifyAuthGuard);

//# sourceMappingURL=verify-auth.guard.js.map