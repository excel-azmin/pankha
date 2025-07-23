"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthGuard", {
    enumerable: true,
    get: function() {
        return AuthGuard;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AuthGuard = class AuthGuard {
    canActivate(context) {
        // Get the request object
        const request = context.switchToHttp().getRequest();
        // Check if the user is authenticated
        if (!request.user) throw new _common.UnauthorizedException('You are not logged in. Please log in to access this resource.');
        // check users value
        if (!Object?.values(request?.user || {})?.length) throw new _common.UnauthorizedException('You are not logged in. Please log in to access this resource.');
        // log the user info
        this.logger.log(request?.user);
        // Return true if the user is authenticated
        return true;
    }
    constructor(){
        this.logger = new _common.Logger(AuthGuard.name);
    }
};
AuthGuard = _ts_decorate([
    (0, _common.Injectable)()
], AuthGuard);

//# sourceMappingURL=login-auth.guard.js.map