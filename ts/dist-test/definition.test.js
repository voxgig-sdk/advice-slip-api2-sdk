"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
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
        "query": [],
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
        "query": [],
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
        "query": [],
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
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map