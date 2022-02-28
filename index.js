import standardEngine from 'standard-engine'
import * as opts from './options.js'

const Linter = standardEngine.linter

export default new Linter(opts)
