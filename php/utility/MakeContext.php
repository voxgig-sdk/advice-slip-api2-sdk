<?php
declare(strict_types=1);

// AdviceSlipApi2 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class AdviceSlipApi2MakeContext
{
    public static function call(array $ctxmap, ?AdviceSlipApi2Context $basectx): AdviceSlipApi2Context
    {
        return new AdviceSlipApi2Context($ctxmap, $basectx);
    }
}
