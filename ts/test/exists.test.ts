
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AdviceSlipApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await AdviceSlipApi2SDK.test()
    equal(null !== testsdk, true)
  })

})
