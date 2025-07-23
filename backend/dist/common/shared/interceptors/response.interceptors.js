"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ResponseInterceptor", {
    enumerable: true,
    get: function() {
        return ResponseInterceptor;
    }
});
const _common = require("@nestjs/common");
const _rxjs = require("rxjs");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ResponseInterceptor = class ResponseInterceptor {
    intercept(context, next) {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        return next.handle().pipe((0, _rxjs.map)((data)=>{
            // If the response is already formatted (like error responses from your handler)
            if (data?.statusCode && data?.message) {
                response.status(data.statusCode);
                return {
                    status: data.statusCode >= 200 && data.statusCode < 300,
                    path: request?.url,
                    statusCode: data.statusCode,
                    message: data.message,
                    timestamp: new Date().toISOString(),
                    response: data
                };
            }
            // For successful responses
            const result = {
                status: true,
                path: request?.url,
                statusCode: response.statusCode,
                message: 'Request successful',
                timestamp: new Date().toISOString(),
                response: data
            };
            return result;
        }));
    }
};
ResponseInterceptor = _ts_decorate([
    (0, _common.Injectable)()
], ResponseInterceptor);

//# sourceMappingURL=response.interceptors.js.map