"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LibModule", {
    enumerable: true,
    get: function() {
        return LibModule;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _bcyptservice = require("./bcrypt/bcypt.service");
const _date = require("./date");
const _jsonwebtokenservice = require("./jwt-token/jsonwebtoken.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let LibModule = class LibModule {
};
LibModule = _ts_decorate([
    (0, _common.Global)(),
    (0, _common.Module)({
        imports: [
            _jwt.JwtModule
        ],
        providers: [
            _bcyptservice.BcryptService,
            _jsonwebtokenservice.JsonWebTokenService,
            _date.DateService
        ],
        exports: [
            _bcyptservice.BcryptService,
            _jsonwebtokenservice.JsonWebTokenService,
            _date.DateService
        ]
    })
], LibModule);

//# sourceMappingURL=lib.module.js.map