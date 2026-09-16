

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"advice","req":false,"short":"The advice text","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"short":"Unique identifier for the advice slip","type":"`$INTEGER`","index$":1}],"id":{"field":"id","name":"id"},"name":"advice","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"slip_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /advice/{slip_id}","json":"{\"operationId\":\"getAdviceById\",\"parameters\":[{\"description\":\"The ID of the advice slip to retrieve\",\"in\":\"path\",\"name\":\"slip_id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"slip\":{\"advice\":\"Always be yourself.\",\"id\":123}},\"schema\":{\"properties\":{\"slip\":{\"properties\":{\"advice\":{\"description\":\"The advice text\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the advice slip\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with specific advice\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"properties\":{\"text\":{\"description\":\"Message text\",\"type\":\"string\"},\"type\":{\"description\":\"Type of message\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Advice slip not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/advice/{slip_id}","rename":{"param":{"slip_id":"id"}},"segments":[{"lit":"advice"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.slip`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /advice","json":"{\"operationId\":\"getRandomAdvice\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"slip\":{\"advice\":\"Always be yourself.\",\"id\":123}},\"schema\":{\"properties\":{\"slip\":{\"properties\":{\"advice\":{\"description\":\"The advice text\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the advice slip\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with random advice\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/advice","segments":[{"lit":"advice"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.slip`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"advice","name__orig":"advice","Name":"Advice","name_":"advice","name-":"advice","NAME":"ADVICE","index$":0}, {"active":true,"entity":"advice","key$":"BasicAdviceFlow","kind":"basic","name":"BasicAdviceFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"advice_ref01","srcdatavar":"advice_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-advice_ref01"}}],"index$":0}]}, 'Advice')
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
  
