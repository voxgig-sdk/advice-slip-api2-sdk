# AdviceSlipApi2 SDK configuration

module AdviceSlipApi2Config
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "AdviceSlipApi2",
        "slug" => "advice-slip-api2",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.adviceslip.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "advice" => {},
          "search" => {},
        },
      },
      "entity" => {
        "advice" => {
          "fields" => [
            {
              "name" => "advice",
              "short" => "The advice text",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the advice slip",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "advice",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "slip_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/advice/{slip_id}",
                  "parts" => [
                    "advice",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "slip_id" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.slip`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/advice",
                  "parts" => [
                    "advice",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.slip`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "search" => {
          "fields" => [
            {
              "name" => "query",
              "short" => "The search query used",
              "type" => "`$STRING`",
            },
            {
              "name" => "slips",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "total_results",
              "short" => "Total number of results found",
              "type" => "`$STRING`",
            },
          ],
          "name" => "search",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "query",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/advice/search/{query}",
                  "parts" => [
                    "advice",
                    "search",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "query" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    AdviceSlipApi2Features.make_feature(name)
  end
end
