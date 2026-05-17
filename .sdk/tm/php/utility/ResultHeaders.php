<?php
declare(strict_types=1);

// AdviceSlipApi2 SDK utility: result_headers

class AdviceSlipApi2ResultHeaders
{
    public static function call(AdviceSlipApi2Context $ctx): ?AdviceSlipApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
