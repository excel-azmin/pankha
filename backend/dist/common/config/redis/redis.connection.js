"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedisConfigModule", {
    enumerable: true,
    get: function() {
        return RedisConfigModule;
    }
});
const _ioredis = require("@nestjs-modules/ioredis");
const _common = require("@nestjs/common");
const _ioredis1 = /*#__PURE__*/ _interop_require_default(require("ioredis"));
const _envconfigservice = require("../env/env-config.service");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let RedisConfigModule = class RedisConfigModule {
};
RedisConfigModule = _ts_decorate([
    (0, _common.Global)(),
    (0, _common.Module)({
        imports: [
            _ioredis.RedisModule.forRootAsync({
                useFactory: async (configService)=>({
                        type: 'single',
                        url: `redis://${configService.get('REDIS_HOST')}:${+configService.get('REDIS_PORT')}/`
                    }),
                inject: [
                    _envconfigservice.EnvConfigService
                ]
            })
        ],
        providers: [
            {
                provide: 'REDIS_CLIENT',
                useFactory: (configService)=>{
                    return new _ioredis1.default({
                        host: configService.get('REDIS_HOST'),
                        port: +configService.get('REDIS_PORT')
                    });
                },
                inject: [
                    _envconfigservice.EnvConfigService
                ]
            }
        ],
        exports: [
            'REDIS_CLIENT'
        ]
    })
], RedisConfigModule);

//# sourceMappingURL=redis.connection.js.map