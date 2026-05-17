<?php
declare(strict_types=1);

// AdviceSlipApi2 SDK utility: prepare_headers

class AdviceSlipApi2PrepareHeaders
{
    public static function call(AdviceSlipApi2Context $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
