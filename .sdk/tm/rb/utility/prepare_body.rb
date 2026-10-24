# AdviceSlipApi2 SDK utility: prepare_body
require_relative 'media'
module AdviceSlipApi2Utilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return AdviceSlipApi2Utilities.raw_body(ctx.reqdata) if AdviceSlipApi2Utilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
