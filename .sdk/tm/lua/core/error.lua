-- AdviceSlipApi2 SDK error

local AdviceSlipApi2Error = {}
AdviceSlipApi2Error.__index = AdviceSlipApi2Error


function AdviceSlipApi2Error.new(code, msg, ctx)
  local self = setmetatable({}, AdviceSlipApi2Error)
  self.is_sdk_error = true
  self.sdk = "AdviceSlipApi2"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function AdviceSlipApi2Error:error()
  return self.msg
end


function AdviceSlipApi2Error:__tostring()
  return self.msg
end


return AdviceSlipApi2Error
