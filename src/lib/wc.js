const wc = data => {
  let lines = 0
  let words = 0
  let letters = 0

  const rows = data.split('\n')
  lines = rows.length
  words = rows.reduce((acc, row) => acc + row.match(/\S+/g).length, 0)
  letters = data.length

  return {
    lines, words, letters
  }
}

module.exports = wc
