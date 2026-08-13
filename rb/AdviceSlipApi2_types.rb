# frozen_string_literal: true

# Typed models for the AdviceSlipApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Advice entity data model.
#
# @!attribute [rw] advice
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
Advice = Struct.new(
  :advice,
  :id,
  keyword_init: true
)

# Request payload for Advice#load.
#
# @!attribute [rw] id
#   @return [Integer, nil]
AdviceLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] query
#   @return [String, nil]
#
# @!attribute [rw] slips
#   @return [Array, nil]
#
# @!attribute [rw] total_results
#   @return [String, nil]
Search = Struct.new(
  :query,
  :slips,
  :total_results,
  keyword_init: true
)

# Request payload for Search#load.
#
# @!attribute [rw] id
#   @return [String]
SearchLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

