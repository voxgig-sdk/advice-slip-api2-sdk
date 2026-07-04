-- Typed models for the AdviceSlipApi2 SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Advice
---@field slip? table

---@class AdviceLoadMatch
---@field id number

---@class Search
---@field query? string
---@field slip? table
---@field total_result? string

---@class SearchLoadMatch
---@field id string

local M = {}

return M
