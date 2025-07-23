"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotificationValidationPipe", {
    enumerable: true,
    get: function() {
        return NotificationValidationPipe;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let NotificationValidationPipe = class NotificationValidationPipe {
    async transform(value) {
        const { notificationType } = value;
        let validationErrors = [];
        if (notificationType === 'PUSH') {
            // Validate required fields for PUSH notification
            const requiredFieldsForPush = [
                'senderId',
                'pushTokens',
                'title',
                'message'
            ];
            validationErrors = this.validateFields(value, requiredFieldsForPush);
        } else {
            // Validate required fields for non-PUSH notification
            const requiredFieldsForNonPush = [
                'senderId',
                'fullName',
                'title',
                'message'
            ];
            validationErrors = this.validateFields(value, requiredFieldsForNonPush);
        }
        if (validationErrors.length > 0) {
            // Format errors as a string or object for the BadRequestException
            const errorMessages = validationErrors.map((error)=>`${error.field}: ${error.message}`).join(', ');
            throw new _common.BadRequestException(`Validation failed: ${errorMessages}`);
        }
        return value;
    }
    validateFields(value, requiredFields) {
        const errors = [];
        requiredFields.forEach((field)=>{
            if (!value[field]) {
                errors.push({
                    field,
                    message: `${field} is required`
                });
            }
        });
        return errors;
    }
};
NotificationValidationPipe = _ts_decorate([
    (0, _common.Injectable)()
], NotificationValidationPipe);

//# sourceMappingURL=notification-validation.pipe.js.map