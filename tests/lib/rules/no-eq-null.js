/**
 * @fileoverview Tests for no-eq-null rule.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-eq-null"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

const MESSAGE = "Use '===' to compare with null.";

ruleTester.run("no-eq-null", rule, {
    valid: [
        "if (x === null) { }",
        "if (null === f()) { }"
    ],
    invalid: [
        { code: "if (x == null) { }", errors: [{ message: MESSAGE, type: "BinaryExpression" }] },
        { code: "if (x != null) { }", errors: [{ message: MESSAGE, type: "BinaryExpression" }] },
        { code: "do {} while (null == x)", errors: [{ message: MESSAGE, type: "BinaryExpression" }] }
    ]
});
