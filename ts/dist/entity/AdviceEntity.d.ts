import { AdviceSlipApi2EntityBase } from '../AdviceSlipApi2EntityBase';
import type { AdviceSlipApi2SDK } from '../AdviceSlipApi2SDK';
import type { Control } from '../types';
import type { Advice, AdviceLoadMatch } from '../AdviceSlipApi2Types';
declare class AdviceEntity extends AdviceSlipApi2EntityBase<Advice> {
    constructor(client: AdviceSlipApi2SDK, entopts: any);
    make(this: AdviceEntity): AdviceEntity;
    load(this: any, reqmatch?: AdviceLoadMatch, ctrl?: Control): Promise<AdviceEntity>;
}
export { AdviceEntity };
