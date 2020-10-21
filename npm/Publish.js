const Plugins = require('./Plugins')
const fse     = require('fs-extra')
const fs = require('fs');
const fileMatch = require('file-match');

class Publish {
  constructor() {
    this.options = {
      verbose: false
    }

    this.getArguments()
  }

  getArguments() {
    if (process.argv.length > 2) {
      let arg = process.argv[2]
      switch (arg) {
        case '-v':
        case '--verbose':
          this.options.verbose = true
          break
        default:
          throw new Error(`Unknown option ${arg}`)
      }
    }
  }

  run() {
    // Publish files
    Plugins.forEach((module) => {
      try {
        if(fse.existsSync(module.from)) {
          const filterFunc = (src) => {
            const stats = fs.statSync(src);
            if(module.filter) {
              const file_match = fileMatch(module.filter);
              return !stats.isFile() || file_match(src);
            }
            return true
          }
          fse.copySync(module.from, module.to, { filter: filterFunc })
        } else {
          fse.copySync(module.from.replace('node_modules/', '../'), module.to)
        }
        if (this.options.verbose) {
          console.log(`Copied ${module.from} to ${module.to}`)
        }
      } catch (err) {
        console.error(`Error: ${err}`)
      }
    })
  }
}

(new Publish()).run()
