<?php
declare(strict_types=1);

// AdviceSlipApi2 SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

AdviceSlipApi2Utility::setRegistrar(function (AdviceSlipApi2Utility $u): void {
    $u->clean = [AdviceSlipApi2Clean::class, 'call'];
    $u->done = [AdviceSlipApi2Done::class, 'call'];
    $u->make_error = [AdviceSlipApi2MakeError::class, 'call'];
    $u->feature_add = [AdviceSlipApi2FeatureAdd::class, 'call'];
    $u->feature_hook = [AdviceSlipApi2FeatureHook::class, 'call'];
    $u->feature_init = [AdviceSlipApi2FeatureInit::class, 'call'];
    $u->fetcher = [AdviceSlipApi2Fetcher::class, 'call'];
    $u->make_fetch_def = [AdviceSlipApi2MakeFetchDef::class, 'call'];
    $u->make_context = [AdviceSlipApi2MakeContext::class, 'call'];
    $u->make_options = [AdviceSlipApi2MakeOptions::class, 'call'];
    $u->make_request = [AdviceSlipApi2MakeRequest::class, 'call'];
    $u->make_response = [AdviceSlipApi2MakeResponse::class, 'call'];
    $u->make_result = [AdviceSlipApi2MakeResult::class, 'call'];
    $u->make_point = [AdviceSlipApi2MakePoint::class, 'call'];
    $u->make_spec = [AdviceSlipApi2MakeSpec::class, 'call'];
    $u->make_url = [AdviceSlipApi2MakeUrl::class, 'call'];
    $u->param = [AdviceSlipApi2Param::class, 'call'];
    $u->prepare_auth = [AdviceSlipApi2PrepareAuth::class, 'call'];
    $u->prepare_body = [AdviceSlipApi2PrepareBody::class, 'call'];
    $u->prepare_headers = [AdviceSlipApi2PrepareHeaders::class, 'call'];
    $u->prepare_method = [AdviceSlipApi2PrepareMethod::class, 'call'];
    $u->prepare_params = [AdviceSlipApi2PrepareParams::class, 'call'];
    $u->prepare_path = [AdviceSlipApi2PreparePath::class, 'call'];
    $u->prepare_query = [AdviceSlipApi2PrepareQuery::class, 'call'];
    $u->result_basic = [AdviceSlipApi2ResultBasic::class, 'call'];
    $u->result_body = [AdviceSlipApi2ResultBody::class, 'call'];
    $u->result_headers = [AdviceSlipApi2ResultHeaders::class, 'call'];
    $u->transform_request = [AdviceSlipApi2TransformRequest::class, 'call'];
    $u->transform_response = [AdviceSlipApi2TransformResponse::class, 'call'];
});
