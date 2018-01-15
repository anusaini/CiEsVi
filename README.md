# CiEsVi

A CSV library - node module

## Usage

```javascript

  > var CiEsVi = require('ciesvi').CiEsVi

  > var c = new CiEsVi(`a,b,c\n1,2,3\n4,5,6\n7,8,9`, { rowSplitter: '\n', colSplitter: ',' })

  > c
  CiEsVi {
    options: { rowSplitter: '\n', colSplitter: ',' },
    data: 'a,b,c\n1,2,3\n4,5,6\n7,8,9',
    rows: [ 'a,b,c', '1,2,3', '4,5,6', '7,8,9' ],
    columns: [ 'a' ],
    matrix:
    [ [ 'a', 'b', 'c' ],
      [ '1', '2', '3' ],
      [ '4', '5', '6' ],
      [ '7', '8', '9' ]
    ],
    count: { col: 1, row: 23 },
    sortingManager: SortingManager { rows: [ 'a,b,c', '1,2,3', '4,5,6', '7,8,9' ], cache: [] }
  }

  > c.table
  { ascii: 'a,b,c | 1,2,3 | 4,5,6 | 7,8,9\n=======================\n',
    markdown: '| a,b,c | 1,2,3 | 4,5,6 | 7,8,9 |\n|-------|-------|-------|-------|\n',
    html: '<table>      <thead>        <tr>          <th>a,b,c</th><th>1,2,3</th><th>4,5,6</th><th>7,8,9</th>        </tr>      </thead>      <tbody>              </tbody>    </table>' }

  > c
  CiEsVi {
    options: { rowSplitter: '\n', colSplitter: ',' },
    data: 'a,b,c\n1,2,3\n4,5,6\n7,8,9',
    rows: [ 'a,b,c', '1,2,3', '4,5,6', '7,8,9' ],
    columns: [ 'a' ],
    matrix:
    [ [ 'a', 'b', 'c' ],
      [ '1', '2', '3' ],
      [ '4', '5', '6' ],
      [ '7', '8', '9' ]
    ],
    count: { col: 1, row: 23 },
    sortingManager:
    SortingManager {
      rows: [ 'a,b,c', '1,2,3', '4,5,6', '7,8,9' ],
      cache: [ desc: [Array] ]
    }
  }

```

## License

MIT
