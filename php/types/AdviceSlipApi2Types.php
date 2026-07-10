<?php
declare(strict_types=1);

// Typed models for the AdviceSlipApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Advice entity data model. */
class Advice
{
    public ?array $slip = null;
}

/** Request payload for Advice#load. */
class AdviceLoadMatch
{
    public ?int $id = null;
}

/** Search entity data model. */
class Search
{
    public ?string $query = null;
    public ?array $slip = null;
    public ?string $total_result = null;
}

/** Request payload for Search#load. */
class SearchLoadMatch
{
    public string $id;
}

