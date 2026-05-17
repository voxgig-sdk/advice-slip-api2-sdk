# AdviceSlipApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module AdviceSlipApi2Features
  def self.make_feature(name)
    case name
    when "base"
      AdviceSlipApi2BaseFeature.new
    when "test"
      AdviceSlipApi2TestFeature.new
    else
      AdviceSlipApi2BaseFeature.new
    end
  end
end
