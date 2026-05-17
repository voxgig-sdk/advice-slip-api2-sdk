
import { Context } from './Context'


class AdviceSlipApi2Error extends Error {

  isAdviceSlipApi2Error = true

  sdk = 'AdviceSlipApi2'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  AdviceSlipApi2Error
}

