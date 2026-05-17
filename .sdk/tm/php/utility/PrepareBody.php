<?php
declare(strict_types=1);

// AdviceSlipApi2 SDK utility: prepare_body

class AdviceSlipApi2PrepareBody
{
    public static function call(AdviceSlipApi2Context $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
