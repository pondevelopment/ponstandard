#!/usr/bin/env node
/* eslint-disable no-var, no-eval */

var match = process.version.match(/v(\d+)\.(\d+)/)
var major = parseInt(match[1], 10)
var minor = parseInt(match[2], 10)

if (major >= 14 || (major === 14 && minor >= 14)) {
  eval('import("standard-engine")').then((standardEngine) => {
    eval('import("../options.js")').then((options) => {
      standardEngine.cli(options.default)
    })
  })
} else {
  console.error('ponstandard: Node 14.14.0 or greater is required. `pomstandard` did not run.')
}
