"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "compressImage", {
    enumerable: true,
    get: function() {
        return compressImage;
    }
});
const _fs = /*#__PURE__*/ _interop_require_wildcard(require("fs"));
const _sharp = /*#__PURE__*/ _interop_require_wildcard(require("sharp"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
async function compressImage(path, mimetype) {
    const sharpInstance = _sharp(path);
    let buffer;
    if (mimetype === 'image/jpeg') {
        buffer = await sharpInstance.jpeg({
            quality: 70
        }).toBuffer();
    } else if (mimetype === 'image/png') {
        buffer = await sharpInstance.png({
            compressionLevel: 8
        }).toBuffer();
    } else {
        return;
    }
    await _fs.promises.writeFile(path, buffer);
}

//# sourceMappingURL=image-compression.js.map