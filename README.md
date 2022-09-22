# Installation
`npm install git+github:4lexndery/js-utils#dev`
# Usage
```js
const {Func} = require('js-utils')
const f = new Func

let i = f.lst('hello world','o')
//                               ^
//                  this is optional

console.log(i)
```

output:
```
[ 'hell',' w','rld' ]
```
