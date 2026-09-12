import { AdviceSlipApi2EntityBase } from '../AdviceSlipApi2EntityBase';
import type { AdviceSlipApi2SDK } from '../AdviceSlipApi2SDK';
import type { Control } from '../types';
import type { Search, SearchLoadMatch } from '../AdviceSlipApi2Types';
declare class SearchEntity extends AdviceSlipApi2EntityBase<Search> {
    constructor(client: AdviceSlipApi2SDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    load(this: any, reqmatch?: SearchLoadMatch, ctrl?: Control): Promise<SearchEntity>;
}
export { SearchEntity };
