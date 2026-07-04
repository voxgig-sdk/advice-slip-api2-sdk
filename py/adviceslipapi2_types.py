# Typed models for the AdviceSlipApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Advice:
    slip: Optional[dict] = None


@dataclass
class AdviceLoadMatch:
    id: int


@dataclass
class Search:
    query: Optional[str] = None
    slip: Optional[list] = None
    total_result: Optional[str] = None


@dataclass
class SearchLoadMatch:
    id: str

