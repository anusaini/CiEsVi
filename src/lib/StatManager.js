const PunctuationStat = require('node-punctuation-stats')
const wc = require('./wc')

class StatManager {
  punctuationStat(data) {
    const pStat = new PunctuationStat()
    return pStat.inText(data)
  }

  wc(data) {
    return wc(data)
  }
}

module.exports = StatManager
