

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AdviceSlipApi2SDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AdviceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ADVICE_SLIP_API2_TEST_LIVE=TRUE.
  afterEach(liveDelay('ADVICE_SLIP_API2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AdviceSlipApi2SDK.test()
    const ent = testsdk.Advice()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ADVICE_SLIP_API2_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'advice.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"advice":{"a":true,"h":"Advice","n":"advice","r":false,"sh":"The advice text","t":"`$STRING`","key$":"advice","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the advice slip","t":"`$INTEGER`","key$":"id","index$":1}},"id":{"field":"id","name":"id"},"name":"advice","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /advice/{slip_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slip_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/advice/{slip_id}","q":{"exist":["id"]},"r":{"param":{"slip_id":"id"}},"s":[{"lit":"advice"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.slip`"},"index$":0},{"a":true,"co":{"id":"GET /advice","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/advice","q":{},"r":{},"s":[{"lit":"advice"}],"t":{"req":"`reqdata`","res":"`body.slip`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"advice","name__orig":"advice","Name":"Advice","name_":"advice","name-":"advice","NAME":"ADVICE","index$":0}, {"active":true,"entity":"advice","key$":"BasicAdviceFlow","kind":"basic","name":"BasicAdviceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"advice_ref01","srcdatavar":"advice_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-advice_ref01"}}],"index$":0}]}, 'Advice', {"GET /advice/{slip_id}":{"protocol":"http","parameters":[{"name":"slip_id","in":"path","required":true,"description":"The ID of the advice slip to retrieve","schema":{"type":"integer"},"index$":0}]},"GET /advice":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let advice_ref01_data = Object.values(setup.data.existing.advice)[0] as any

    // LOAD
    const advice_ref01_ent = client.Advice()
    const advice_ref01_match_dt0: any = {}
    advice_ref01_match_dt0.id = advice_ref01_data.id
    const advice_ref01_data_dt0 = (await advice_ref01_ent.load(advice_ref01_match_dt0)).data()
    assert(advice_ref01_data_dt0.id === advice_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/advice/AdviceTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = AdviceSlipApi2SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['advice01','advice02','advice03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ADVICE_SLIP_API2_TEST_ADVICE_ENTID': idmap,
    'ADVICE_SLIP_API2_TEST_LIVE': 'FALSE',
    'ADVICE_SLIP_API2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ADVICE_SLIP_API2_TEST_ADVICE_ENTID']

  const live = 'TRUE' === env.ADVICE_SLIP_API2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ADVICE_SLIP_API2_TEST_ADVICE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new AdviceSlipApi2SDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.ADVICE_SLIP_API2_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
