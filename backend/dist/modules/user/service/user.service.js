"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: function() {
        return UserService;
    }
});
const _common = require("@nestjs/common");
const _bcyptservice = require("../../../common/lib/bcrypt/bcypt.service");
const _jsonwebtokenservice = require("../../../common/lib/jwt-token/jsonwebtoken.service");
const _userrepository = require("../repository/user.repository");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UserService = class UserService {
    async createUser(createUser) {
        return createUser;
    }
    constructor(userRepository, bcryptService, jsonWebTokenService){
        this.userRepository = userRepository;
        this.bcryptService = bcryptService;
        this.jsonWebTokenService = jsonWebTokenService;
    }
};
UserService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userrepository.UserRepository === "undefined" ? Object : _userrepository.UserRepository,
        typeof _bcyptservice.BcryptService === "undefined" ? Object : _bcyptservice.BcryptService,
        typeof _jsonwebtokenservice.JsonWebTokenService === "undefined" ? Object : _jsonwebtokenservice.JsonWebTokenService
    ])
], UserService);

//# sourceMappingURL=user.service.js.map