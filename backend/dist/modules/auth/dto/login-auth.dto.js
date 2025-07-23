"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoginAuthDto", {
    enumerable: true,
    get: function() {
        return LoginAuthDto;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let LoginAuthDto = class LoginAuthDto {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        example: 'john.doe@example.com',
        description: 'Email address'
    }),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], LoginAuthDto.prototype, "email", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        example: 'StrongPassword123!',
        description: 'Password'
    }),
    (0, _classvalidator.IsStrongPassword)(),
    _ts_metadata("design:type", String)
], LoginAuthDto.prototype, "password", void 0);

//# sourceMappingURL=login-auth.dto.js.map