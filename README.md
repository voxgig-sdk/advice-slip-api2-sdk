# AdviceSlipApi2 SDK

Fetch random pieces of advice, look them up by ID, or search the slip catalogue

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Advice Slip API

The [Advice Slip JSON API](https://api.adviceslip.com) is a small, free public API that serves short pieces of advice ("slips"). It is run by Tom Kiss and, by its own count, hands out over 10 million pieces of advice each year.

What you get from the API:

- A random slip via `GET /advice`, returning a slip object with `slip_id` (integer) and `advice` (string).
- A specific slip via `GET /advice/{slip_id}`.
- Full-text search via `GET /advice/search/{query}`, returning `total_results`, the `query`, and an array of matching slip objects.
- A daily RSS feed at `/daily_adviceslip.rss`.

Operational notes: there is no authentication, and responses are cached for 2 seconds (a repeat call inside that window returns the same advice). Optional JSONP is supported via a `callback` query parameter. Error and notice responses use a `message` object with `type` (notice/warning/error) and `text` fields.

Note: this slug is a duplicate of `advice-slip` and points at the same upstream API.

## Try it

**TypeScript**
```bash
npm install advice-slip-api2
```

**Python**
```bash
pip install advice-slip-api2-sdk
```

**PHP**
```bash
composer require voxgig/advice-slip-api2-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/advice-slip-api2-sdk/go
```

**Ruby**
```bash
gem install advice-slip-api2-sdk
```

**Lua**
```bash
luarocks install advice-slip-api2-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { AdviceSlipApi2SDK } from 'advice-slip-api2'

const client = new AdviceSlipApi2SDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o advice-slip-api2-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "advice-slip-api2": {
      "command": "/abs/path/to/advice-slip-api2-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Advice** | An advice slip resource — fetch a random slip at `GET /advice` or a specific one at `GET /advice/{slip_id}`; each slip has a `slip_id` and an `advice` string. | `/advice/{slip_id}` |
| **Search** | Full-text search over the slip catalogue at `GET /advice/search/{query}`, returning `total_results`, the `query`, and an array of matching slips. | `/advice/search/{query}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from adviceslipapi2_sdk import AdviceSlipApi2SDK

client = AdviceSlipApi2SDK({})


# Load a specific advice
advice, err = client.Advice(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'adviceslipapi2_sdk.php';

$client = new AdviceSlipApi2SDK([]);


// Load a specific advice
[$advice, $err] = $client->Advice(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/advice-slip-api2-sdk/go"

client := sdk.NewAdviceSlipApi2SDK(map[string]any{})

```

### Ruby

```ruby
require_relative "AdviceSlipApi2_sdk"

client = AdviceSlipApi2SDK.new({})


# Load a specific advice
advice, err = client.Advice(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("advice-slip-api2_sdk")

local client = sdk.new({})


-- Load a specific advice
local advice, err = client:Advice(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = AdviceSlipApi2SDK.test()
const result = await client.Advice().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = AdviceSlipApi2SDK.test(None, None)
result, err = client.Advice(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = AdviceSlipApi2SDK::test(null, null);
[$result, $err] = $client->Advice(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Advice(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = AdviceSlipApi2SDK.test(nil, nil)
result, err = client.Advice(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Advice(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Advice Slip API

- Upstream: [https://api.adviceslip.com](https://api.adviceslip.com)

- The Advice Slip JSON API is provided free of charge by Tom Kiss (© 2013–2026).
- No API key or authentication is required.
- Responses are cached for 2 seconds, so repeat requests within that window return the same slip.
- The creator suggests supporting the service via Ko-fi ("buy them a coffee or beer") if you find it useful.

---

Generated from the Advice Slip API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
