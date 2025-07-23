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
    get CLERK_PUBLISHABLE_KEY () {
        return CLERK_PUBLISHABLE_KEY;
    },
    get CLERK_SECRET_KEY () {
        return CLERK_SECRET_KEY;
    },
    get DATABASE_URL () {
        return DATABASE_URL;
    },
    get EnvConfigService () {
        return EnvConfigService;
    },
    get JWT_ALGORITHM () {
        return JWT_ALGORITHM;
    },
    get JWT_EXPIRES_IN () {
        return JWT_EXPIRES_IN;
    },
    get JWT_SECRET () {
        return JWT_SECRET;
    },
    get LOGIN_EXPIRES_IN () {
        return LOGIN_EXPIRES_IN;
    },
    get LOGIN_SECRET () {
        return LOGIN_SECRET;
    },
    get NODE_ENV () {
        return NODE_ENV;
    },
    get REDIS_HOST () {
        return REDIS_HOST;
    },
    get REDIS_PORT () {
        return REDIS_PORT;
    },
    get REFRESH_EXPIRES_IN () {
        return REFRESH_EXPIRES_IN;
    },
    get REFRESH_SECRET () {
        return REFRESH_SECRET;
    },
    get WEBHOOK_SECRET () {
        return WEBHOOK_SECRET;
    }
});
const _common = require("@nestjs/common");
const _dotenv = /*#__PURE__*/ _interop_require_wildcard(require("dotenv"));
const _joi = /*#__PURE__*/ _interop_require_wildcard(require("joi"));
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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const NODE_ENV = 'NODE_ENV';
const DATABASE_URL = 'DATABASE_URL';
const JWT_ALGORITHM = 'JWT_ALGORITHM';
const JWT_SECRET = 'JWT_SECRET';
const JWT_EXPIRES_IN = 'JWT_EXPIRES_IN';
const LOGIN_EXPIRES_IN = 'LOGIN_EXPIRES_IN';
const REFRESH_SECRET = 'REFRESH_SECRET';
const REFRESH_EXPIRES_IN = 'REFRESH_EXPIRES_IN';
const LOGIN_SECRET = 'LOGIN_SECRET';
const WEBHOOK_SECRET = 'WEBHOOK_SECRET';
const REDIS_HOST = 'REDIS_HOST';
const REDIS_PORT = 'REDIS_PORT';
const CLERK_PUBLISHABLE_KEY = 'CLERK_PUBLISHABLE_KEY';
const CLERK_SECRET_KEY = 'CLERK_SECRET_KEY';
let EnvConfigService = class EnvConfigService {
    /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */ validateInput(envConfig) {
        const envVarsSchema = _joi.object({
            NODE_ENV: _joi.string().valid('development', 'production', 'test', 'provision', 'staging').default('development'),
            DATABASE_URL: _joi.string().required(),
            JWT_ALGORITHM: _joi.string().valid('HS256', 'HS384', 'HS512', 'RS256', 'RS384', 'RS512').default('HS256'),
            JWT_SECRET: _joi.string().required(),
            JWT_EXPIRES_IN: _joi.string().default('1h'),
            LOGIN_SECRET: _joi.string().required(),
            LOGIN_EXPIRES_IN: _joi.string().default('15m'),
            REFRESH_SECRET: _joi.string().required(),
            REFRESH_EXPIRES_IN: _joi.string().default('7d'),
            WEBHOOK_SECRET: _joi.string().required(),
            REDIS_HOST: _joi.string().required(),
            REDIS_PORT: _joi.number().required(),
            CLERK_PUBLISHABLE_KEY: _joi.string().required(),
            CLERK_SECRET_KEY: _joi.string().required()
        });
        const { error, value: validatedEnvConfig } = envVarsSchema.validate(envConfig);
        if (error) {
            _common.Logger.error(error, error.stack, this.constructor.name);
            process.exit(1);
        }
        return validatedEnvConfig;
    }
    get(key) {
        switch(key){
            case DATABASE_URL:
                return process.env.NODE_ENV === 'test' ? `test_${this.envConfig[key]}` : this.envConfig[key];
            default:
                return this.envConfig[key];
        }
    }
    constructor(){
        const config = _dotenv.config().parsed;
        this.envConfig = this.validateInput(config);
    }
};
EnvConfigService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], EnvConfigService);

//# sourceMappingURL=env-config.service.js.map