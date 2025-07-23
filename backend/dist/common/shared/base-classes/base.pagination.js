"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BasePaginationDto", {
    enumerable: true,
    get: function() {
        return BasePaginationDto;
    }
});
const _swagger = require("@nestjs/swagger");
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let BasePaginationDto = class BasePaginationDto {
    get skip() {
        return (this.page - 1) * this.limit;
    }
    get orderQuery() {
        return {
            [this.sort]: this.order
        };
    }
    get orderAggQuery() {
        return {
            [this.sort]: this.order == 'asc' ? 1 : -1
        };
    }
    get filterQuery() {
        return this.filter ? this.filter.split(',').reduce((acc, field)=>{
            const [key, value] = field.split(':');
            return {
                ...acc,
                [key]: value
            };
        }, {}) : {};
    }
    get selectFields() {
        return this.select ? this.select.split(',').reduce((acc, field)=>({
                ...acc,
                [field]: 1
            }), {}) : {};
    }
    get dateFilterQuery() {
        if (this.fromDate && this.toDate && this.dateField) {
            // set the from date to the start of the day
            const fromDate = new Date(this.fromDate);
            fromDate.setHours(0, 0, 0, 0);
            // set the to date to the end of the day
            const toDate = new Date(this.toDate);
            toDate.setHours(23, 59, 59, 999);
            return {
                [this.dateField]: {
                    $gte: fromDate,
                    $lte: toDate
                }
            };
        }
        if (this.fromDate && this.dateField) {
            // set the from date to the start of the day
            const fromDate = new Date(this.fromDate);
            fromDate.setHours(0, 0, 0, 0);
            return {
                [this.dateField]: {
                    $gte: fromDate
                }
            };
        }
        if (this.toDate && this.dateField) {
            // set the to date to the end of the day
            const toDate = new Date(this.toDate);
            toDate.setHours(23, 59, 59, 999);
            return {
                [this.dateField]: {
                    $lte: toDate
                }
            };
        }
        return {};
    }
    constructor(){
        this.page = 1;
        this.limit = 10;
        this.sort = 'createdAt';
        this.order = 'desc';
        this.search = '';
        this.filter = '';
        this.select = '';
        this.dateField = 'createdAt';
    }
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'The page number',
        example: 1,
        required: false
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classtransformer.Transform)(({ value })=>parseInt(value)),
    (0, _classvalidator.IsNumber)(),
    _ts_metadata("design:type", Number)
], BasePaginationDto.prototype, "page", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'The number of items per page',
        example: 10,
        required: false
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsNumber)(),
    (0, _classtransformer.Transform)(({ value })=>parseInt(value)),
    _ts_metadata("design:type", Number)
], BasePaginationDto.prototype, "limit", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'The field to sort by',
        example: 'createdAt',
        required: false
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], BasePaginationDto.prototype, "sort", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'The order to sort by',
        example: 'desc',
        required: false
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsEnum)([
        'asc',
        'desc'
    ]),
    _ts_metadata("design:type", String)
], BasePaginationDto.prototype, "order", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'The search query',
        example: 'John Doe',
        required: false
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], BasePaginationDto.prototype, "search", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'The fields and values to filter by',
        example: 'name:John Doe,age:30',
        required: false
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], BasePaginationDto.prototype, "filter", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'The fields to select',
        example: '_id,createdAt,updatedAt',
        required: false
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], BasePaginationDto.prototype, "select", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'The from date',
        example: '2024-01-01',
        required: false
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsDateString)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BasePaginationDto.prototype, "fromDate", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'The to date',
        example: '2024-01-01',
        required: false
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsDateString)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BasePaginationDto.prototype, "toDate", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        description: 'The fields to select',
        example: 'createdAt',
        required: false
    }),
    (0, _classvalidator.IsOptional)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], BasePaginationDto.prototype, "dateField", void 0);

//# sourceMappingURL=base.pagination.js.map