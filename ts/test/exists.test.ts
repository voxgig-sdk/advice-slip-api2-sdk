
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AdviceSlipApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = AdviceSlipApi2SDK.test()
    equal(testsdk instanceof AdviceSlipApi2SDK, true,
      'AdviceSlipApi2SDK.test() must return a client synchronously')
  })

})
