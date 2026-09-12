import { Context } from './Context';
declare class AdviceSlipApi2Error extends Error {
    isAdviceSlipApi2Error: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { AdviceSlipApi2Error };
