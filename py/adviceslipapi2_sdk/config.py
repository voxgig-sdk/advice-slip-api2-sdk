# AdviceSlipApi2 SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "AdviceSlipApi2",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.adviceslip.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "advice": {},
                "search": {},
            },
        },
        "entity": {
      "advice": {
        "fields": [
          {
            "name": "advice",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/advice/{slip_id}",
                "parts": [
                  "advice",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slip_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.slip`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/advice",
                "parts": [
                  "advice",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.slip`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "query",
            "type": "`$STRING`",
          },
          {
            "name": "slips",
            "type": "`$ARRAY`",
          },
          {
            "name": "total_results",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/advice/search/{query}",
                "parts": [
                  "advice",
                  "search",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "query": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
