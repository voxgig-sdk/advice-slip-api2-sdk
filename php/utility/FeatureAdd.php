<?php
declare(strict_types=1);

// AdviceSlipApi2 SDK utility: feature_add

class AdviceSlipApi2FeatureAdd
{
    public static function call(AdviceSlipApi2Context $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
