"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedisCacheService", {
    enumerable: true,
    get: function() {
        return RedisCacheService;
    }
});
const _common = require("@nestjs/common");
const _ioredis = require("ioredis");
const _cache = require("../../utils/cache");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let RedisCacheService = class RedisCacheService {
    async setCache(prefix, key, value, duration = 60 * 5) {
        const cacheKey = (0, _cache.buildCacheKey)(prefix, {
            key
        });
        await this.redis.set(cacheKey, JSON.stringify(value), 'EX', duration);
    }
    async getCacheValue(prefix, key) {
        const cachedValue = await this.redis.get((0, _cache.buildCacheKey)(prefix, {
            key
        }));
        return cachedValue ? JSON.parse(cachedValue) : null;
    }
    constructor(redis){
        this.redis = redis;
    }
};
RedisCacheService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)('REDIS_CLIENT')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _ioredis.Redis === "undefined" ? Object : _ioredis.Redis
    ])
], RedisCacheService);

//# sourceMappingURL=redis-cache.service.js.map