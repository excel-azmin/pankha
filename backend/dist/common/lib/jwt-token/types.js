"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get LoginTokenPayloadSchema () {
        return LoginTokenPayloadSchema;
    },
    get RefreshTokenPayloadSchema () {
        return RefreshTokenPayloadSchema;
    },
    get RegistrationTokenPayloadSchema () {
        return RegistrationTokenPayloadSchema;
    }
});
const _zod = require("zod");
const LoginTokenPayloadSchema = _zod.z.object({
    id: _zod.z.string()
});
const RegistrationTokenPayloadSchema = _zod.z.object({
    email: _zod.z.string().email(),
    firstName: _zod.z.string().min(1),
    lastName: _zod.z.string().min(1)
});
const RefreshTokenPayloadSchema = _zod.z.object({
    email: _zod.z.string().email()
});

//# sourceMappingURL=types.js.map