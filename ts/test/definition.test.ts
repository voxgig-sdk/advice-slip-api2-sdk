import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "advice",
    "accessor": "Advice",
    "op": "load",
    "method": "GET",
    "path": "/advice/{slip_id}",
    "args": [
      {
        "name": "id",
        "wire": "slip_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "slip": {
        "id": 123,
        "advice": "Always be yourself."
      }
    },
    "idField": "id"
  },
  {
    "entity": "advice",
    "accessor": "Advice",
    "op": "load",
    "method": "GET",
    "path": "/advice",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "slip": {
        "id": 123,
        "advice": "Always be yourself."
      }
    },
    "idField": "id"
  },
  {
    "entity": "search",
    "accessor": "Search",
    "op": "load",
    "method": "GET",
    "path": "/advice/search/{query}",
    "args": [
      {
        "name": "id",
        "wire": "query",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "total_results": "2",
      "query": "love",
      "slips": [
        {
          "id": 56,
          "advice": "Love yourself first."
        },
        {
          "id": 89,
          "advice": "Spread love wherever you go."
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
