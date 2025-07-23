"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildCacheKey", {
    enumerable: true,
    get: function() {
        return buildCacheKey;
    }
});
const buildCacheKey = (prefix, obj)=>{
    return `${prefix}:${Object.entries(obj).filter(([_, value])=>!!value).map(([key, value])=>`${key}:${value}`).join(':')}`;
};

//# sourceMappingURL=cache.js.map