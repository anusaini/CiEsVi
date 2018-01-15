const Turtler = require('turtler')

class TableManager {

  constructor(data, options) {
    this.data = data
  }

  get table() {
    if (!this.tableData) {
      const turtle = new Turtler(this.data)
      this.tableData = {
        ascii: turtle.ascii(),
        markdown: turtle.markdown(),
        html: turtle.html()
      }
    }
    return this.tableData
  }
}

module.exports = TableManager
