#!/usr/bin/env node
/* eslint-disable no-var, no-eval */

var match = process.version.match(/v(\d+)\.(\d+)/)
var major = parseInt(match[1], 10)
var minor = parseInt(match[2], 10)

if (major >= 16 || (major === 16 && minor >= 16)) {
  eval('import("standard-engine")').then((standardEngine) => {
    eval('import("../options.js")').then((options) => {
      standardEngine.cli(options.default)
    })
  })
} else {
  console.error('ponstandard: Node 16 or greater is required. `ponstandard` did not run.')
}
