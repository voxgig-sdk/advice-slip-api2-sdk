# AdviceSlipApi2 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

AdviceSlipApi2Utility.registrar = ->(u) {
  u.clean = AdviceSlipApi2Utilities::Clean
  u.done = AdviceSlipApi2Utilities::Done
  u.make_error = AdviceSlipApi2Utilities::MakeError
  u.feature_add = AdviceSlipApi2Utilities::FeatureAdd
  u.feature_hook = AdviceSlipApi2Utilities::FeatureHook
  u.feature_init = AdviceSlipApi2Utilities::FeatureInit
  u.fetcher = AdviceSlipApi2Utilities::Fetcher
  u.make_fetch_def = AdviceSlipApi2Utilities::MakeFetchDef
  u.make_context = AdviceSlipApi2Utilities::MakeContext
  u.make_options = AdviceSlipApi2Utilities::MakeOptions
  u.make_request = AdviceSlipApi2Utilities::MakeRequest
  u.make_response = AdviceSlipApi2Utilities::MakeResponse
  u.make_result = AdviceSlipApi2Utilities::MakeResult
  u.make_point = AdviceSlipApi2Utilities::MakePoint
  u.make_spec = AdviceSlipApi2Utilities::MakeSpec
  u.make_url = AdviceSlipApi2Utilities::MakeUrl
  u.param = AdviceSlipApi2Utilities::Param
  u.prepare_auth = AdviceSlipApi2Utilities::PrepareAuth
  u.prepare_body = AdviceSlipApi2Utilities::PrepareBody
  u.prepare_headers = AdviceSlipApi2Utilities::PrepareHeaders
  u.prepare_method = AdviceSlipApi2Utilities::PrepareMethod
  u.prepare_params = AdviceSlipApi2Utilities::PrepareParams
  u.prepare_path = AdviceSlipApi2Utilities::PreparePath
  u.prepare_query = AdviceSlipApi2Utilities::PrepareQuery
  u.result_basic = AdviceSlipApi2Utilities::ResultBasic
  u.result_body = AdviceSlipApi2Utilities::ResultBody
  u.result_headers = AdviceSlipApi2Utilities::ResultHeaders
  u.transform_request = AdviceSlipApi2Utilities::TransformRequest
  u.transform_response = AdviceSlipApi2Utilities::TransformResponse
}
