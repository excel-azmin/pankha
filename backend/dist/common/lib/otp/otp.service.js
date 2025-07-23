"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "generateOTP", {
    enumerable: true,
    get: function() {
        return generateOTP;
    }
});
const generateOTP = (length = 6)=>{
    let otp = '';
    for(let i = 0; i < length; i++){
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
};

//# sourceMappingURL=otp.service.js.map