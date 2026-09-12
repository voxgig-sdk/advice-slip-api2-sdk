export interface Advice {
    advice?: string;
    id?: number;
}
export interface AdviceLoadMatch {
    id: number;
}
export interface Search {
    id?: string;
    query?: string;
    slips?: any[];
    total_results?: string;
}
export interface SearchLoadMatch {
    id: string;
}
