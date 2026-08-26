
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'AdviceSlipApi2',
        slug: "advice-slip-api2",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.adviceslip.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      advice: {
      },

      search: {
      },

    }
  }


  entity = {
    "advice": {
      "fields": [
        {
          "name": "advice",
          "short": "The advice text",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the advice slip",
          "type": "`$INTEGER`"
        }
      ],
      "name": "advice",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "slip_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/advice/{slip_id}",
              "parts": [
                "advice",
                "{id}"
              ],
              "rename": {
                "param": {
                  "slip_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.slip`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/advice",
              "parts": [
                "advice"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.slip`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "search": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "query",
          "short": "The search query used",
          "type": "`$STRING`"
        },
        {
          "name": "slips",
          "type": "`$ARRAY`"
        },
        {
          "name": "total_results",
          "short": "Total number of results found",
          "type": "`$STRING`"
        }
      ],
      "name": "search",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/advice/search/{query}",
              "parts": [
                "advice",
                "search",
                "{id}"
              ],
              "rename": {
                "param": {
                  "query": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

