<?php
declare(strict_types=1);

// AdviceSlipApi2 SDK utility: result_body

class AdviceSlipApi2ResultBody
{
    public static function call(AdviceSlipApi2Context $ctx): ?AdviceSlipApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
