const wc = require('./wc')

const expect = require('chai').expect

describe('wc', () => {
  it('returns { lines: 4, words: 12, letters: 23 } for input "a,b,c\n1,2,3\n4,5,6\n7,8,9"', () => {
    const actual = wc('a,b,c\n1,2,3\n4,5,6\n7,8,9')
    const expected = {
      lines: 4,
      words: 12,
      letters: 23
    }

    expect(actual.lines).to.equal(expected.lines)
    expect(actual.words).to.equal(expected.words)
    expect(actual.letters).to.equal(expected.letters)
  })
})
