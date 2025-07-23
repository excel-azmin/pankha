"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EventListener", {
    enumerable: true,
    get: function() {
        return EventListener;
    }
});
const _common = require("@nestjs/common");
const _eventemitterservice = require("./event-emitter.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let EventListener = class EventListener {
    onModuleInit() {
    // this.eventEmitter.on(
    //   'sendNotification',
    //   async (notificationPayload: any) => {
    //     await this.notificationService.sendNotification(notificationPayload);
    //   },
    // );
    }
    constructor(eventEmitter){
        this.eventEmitter = eventEmitter;
    }
};
EventListener = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _eventemitterservice.RequestEventEmitter === "undefined" ? Object : _eventemitterservice.RequestEventEmitter
    ])
], EventListener);

//# sourceMappingURL=event-listener.service.js.map