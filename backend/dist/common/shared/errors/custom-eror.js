"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CustomError", {
    enumerable: true,
    get: function() {
        return CustomError;
    }
});
const _common = require("@nestjs/common");
let CustomError = class CustomError extends _common.HttpException {
    constructor(message, status, data){
        super({
            statusCode: status,
            message,
            ...data
        }, status), this.data = data;
    }
};

//# sourceMappingURL=custom-eror.js.map