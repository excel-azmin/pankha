"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DateService", {
    enumerable: true,
    get: function() {
        return DateService;
    }
});
const _common = require("@nestjs/common");
const _dayjs = /*#__PURE__*/ _interop_require_wildcard(require("dayjs"));
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
let DateService = class DateService {
    getIsoDate() {
        const isoDate = _dayjs().toISOString();
        return isoDate;
    }
    getCurrentDate() {
        const currentDate = _dayjs().format('YYYY-MM-DD');
        return currentDate;
    }
    getCurrentYear() {
        const currentYear = _dayjs().format('YYYY');
        return currentYear;
    }
    getCurrentMonth() {
        const currentMonth = _dayjs().format('MM');
        return currentMonth;
    }
    getCurrentDay() {
        const currentDay = _dayjs().format('DD');
        return currentDay;
    }
    getCurrentTime() {
        return _dayjs().format('HH:mm:ss ');
    }
    getCurrentDateTime() {
        return _dayjs().format('YYYY-MM-DD HH:mm:ss');
    }
    addDays(days, date = this.getCurrentDate()) {
        return _dayjs(date).add(days, 'day').format('YYYY-MM-DD');
    }
    addMonths(months, date = this.getCurrentDate()) {
        return _dayjs(date).add(months, 'month').format('YYYY-MM-DD');
    }
    addYears(years, date = this.getCurrentDate()) {
        return _dayjs(date).add(years, 'year').format('YYYY-MM-DD');
    }
    addHours(hours, date = this.getCurrentDateTime()) {
        return _dayjs(date).add(hours, 'hour').format('YYYY-MM-DD HH:mm:ss');
    }
    startOfDay(date) {
        return _dayjs(date).startOf('day').toISOString();
    }
    endOfDay(date) {
        return _dayjs(date).endOf('day').toISOString();
    }
    getStartOfDay(date) {
        return _dayjs(date).startOf('day').toISOString();
    }
    getEndOfDay(date) {
        return _dayjs(date).endOf('day').toISOString();
    }
    // get current time in 12 hours format timezone
    getCurrentTimeIn12Hours() {
        return _dayjs().format('h:mm A');
    }
    // get current time in 24 hours format
    getCurrentTimeIn24Hours() {
        return _dayjs().format('HH:mm');
    }
    constructor(){
        this.dayjs = _dayjs;
    }
};
DateService = _ts_decorate([
    (0, _common.Injectable)()
], DateService);

//# sourceMappingURL=index.js.map