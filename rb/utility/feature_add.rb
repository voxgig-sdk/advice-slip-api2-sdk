# AdviceSlipApi2 SDK utility: feature_add
module AdviceSlipApi2Utilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
