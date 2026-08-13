// Typed models for the AdviceSlipApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Advice {
  advice?: string
  id?: number
}

export interface AdviceLoadMatch {
  id?: number
}

export interface Search {
  query?: string
  slips?: any[]
  total_results?: string
}

export interface SearchLoadMatch {
  id: string
}

