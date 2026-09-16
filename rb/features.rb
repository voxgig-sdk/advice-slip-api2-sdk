# AdviceSlipApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module AdviceSlipApi2Features
  def self.make_feature(name)
    case name
    when "base"
      AdviceSlipApi2BaseFeature.new
    when "ratelimit"
      AdviceSlipApi2RatelimitFeature.new
    when "retry"
      AdviceSlipApi2RetryFeature.new
    when "test"
      AdviceSlipApi2TestFeature.new
    when "timeout"
      AdviceSlipApi2TimeoutFeature.new
    else
      AdviceSlipApi2BaseFeature.new
    end
  end
end
