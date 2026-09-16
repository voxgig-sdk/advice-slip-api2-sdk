

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


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ADVICE_SLIP_API2_TEST_LIVE=TRUE.
  afterEach(liveDelay('ADVICE_SLIP_API2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AdviceSlipApi2SDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ADVICE_SLIP_API2_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"query","req":false,"short":"The search query used","type":"`$STRING`","index$":1},{"active":true,"name":"slips","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"name":"total_results","req":false,"short":"Total number of results found","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"search","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"query","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /advice/search/{query}","json":"{\"operationId\":\"searchAdvice\",\"parameters\":[{\"description\":\"The search term to find matching advice slips\",\"in\":\"path\",\"name\":\"query\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"query\":\"love\",\"slips\":[{\"advice\":\"Love yourself first.\",\"id\":56},{\"advice\":\"Spread love wherever you go.\",\"id\":89}],\"total_results\":\"2\"},\"schema\":{\"properties\":{\"query\":{\"description\":\"The search query used\",\"type\":\"string\"},\"slips\":{\"items\":{\"properties\":{\"advice\":{\"description\":\"The advice text\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the advice slip\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"total_results\":{\"description\":\"Total number of results found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with matching advice slips\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"message\":{\"text\":\"No advice slips found matching that search term.\",\"type\":\"notice\"}},\"schema\":{\"properties\":{\"message\":{\"properties\":{\"text\":{\"description\":\"Message text\",\"type\":\"string\"},\"type\":{\"description\":\"Type of message\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"No advice slips found matching the search term\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/advice/search/{query}","rename":{"param":{"query":"id"}},"segments":[{"lit":"advice"},{"lit":"search"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":1}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"search_ref01","srcdatavar":"search_ref01_data","suffix":"_dt0"},"match":{"id":"search01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-search_ref01"}}],"index$":0}]}, 'Search')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LOAD
    const search_ref01_ent = client.Search()
    const search_ref01_match_dt0: any = {}
    search_ref01_match_dt0.id = search_ref01_data.id
    const search_ref01_data_dt0 = (await search_ref01_ent.load(search_ref01_match_dt0)).data()
    assert(search_ref01_data_dt0.id === search_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

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
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ADVICE_SLIP_API2_TEST_SEARCH_ENTID': idmap,
    'ADVICE_SLIP_API2_TEST_LIVE': 'FALSE',
    'ADVICE_SLIP_API2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ADVICE_SLIP_API2_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.ADVICE_SLIP_API2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ADVICE_SLIP_API2_TEST_SEARCH_ENTID']
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
  
