class SortingManager {

  constructor(rows) {
    this.rows = rows
    this.cache = []
  }

  sort(compare, sortId) {
    if (!this.cache[sortId]) {
      const header = this.rows[0]
      const body = this.rows.slice(1)
      this.cache[sortId] = [header, ...body.sort(compare)]
    }
    return this.cache[sortId]
  }

}

module.exports = SortingManager
