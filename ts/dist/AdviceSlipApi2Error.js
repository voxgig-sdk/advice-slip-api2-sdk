"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdviceSlipApi2Error = void 0;
class AdviceSlipApi2Error extends Error {
    isAdviceSlipApi2Error = true;
    sdk = 'AdviceSlipApi2';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.AdviceSlipApi2Error = AdviceSlipApi2Error;
//# sourceMappingURL=AdviceSlipApi2Error.js.map