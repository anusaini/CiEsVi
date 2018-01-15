const TableManager = require('./TableManager')
const SortingManager = require('./SortingManager')

class CiEsVi {

  constructor(csv, options) {
    this.options = options
    this.data = csv
    this.rows = csv.split(options.rowSplitter)
    this.columns = this.data[0].split(options.colSplitter)
    this.matrix = this.rows.map(row => row.split(this.options.colSplitter))
    this.count = {
      col: this.columns.length,
      row: this.data.length
    }
    this.sortingManager = new SortingManager(this.rows)
  }

  get table() {
    this.TableManager = this.TableManager || new TableManager([this.matrix.map(String)])
    return this.TableManager.table
  }

  sortedArray (compare, sortId) {
    return this.sortingManager.sort(compare, sortId)
  }

  sortedCSV (compare, sortId) {
    return this.sortedArray(compare, sortId).join(this.options.rowSplitter)
  }

}

module.exports = CiEsVi
