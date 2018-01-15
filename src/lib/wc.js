const RE_WORDS = /[a-zA-Z0-9]+/g

const wc = (data, rowSplitter) => {
  let lines = 0
  let words = 0
  let letters = 0

  const rows = data.split(rowSplitter)
  lines = rows.length
  words = rows.reduce((acc, row) => acc + row.match(RE_WORDS).length, 0)
  letters = data.length

  return {
    lines, words, letters
  }
}

module.exports = wc
