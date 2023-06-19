"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const preparePaginationOptions = (_a) => {
    var { sortBy = 'createdAt', sortOrder = 'desc' } = _a, options = __rest(_a, ["sortBy", "sortOrder"]);
    const page = options.page ? parseInt(options.page) : 1;
    const limit = options.limit ? parseInt(options.limit) : 10;
    const skip = (page - 1) * limit;
    const sort = { [sortBy]: sortOrder };
    const paginationOptions = { page, limit, skip, sort };
    return paginationOptions;
};
exports.default = preparePaginationOptions;
