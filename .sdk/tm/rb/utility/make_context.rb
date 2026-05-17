# AdviceSlipApi2 SDK utility: make_context
require_relative '../core/context'
module AdviceSlipApi2Utilities
  MakeContext = ->(ctxmap, basectx) {
    AdviceSlipApi2Context.new(ctxmap, basectx)
  }
end
