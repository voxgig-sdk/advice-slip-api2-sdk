
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


  main = {
    name: 'AdviceSlipApi2',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "id",
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
          "name": "query",
          "type": "`$STRING`"
        },
        {
          "name": "slips",
          "type": "`$ARRAY`"
        },
        {
          "name": "total_results",
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

