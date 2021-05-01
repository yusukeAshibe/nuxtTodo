const express = require('express')
const app = express()

app.post('/test', (req, res) => res.json(require('./mocks/profile/test.json')))
//あとは欲しいだけ上記の1行とjsonファイルを追加するだけ

app.listen(8080, () => console.log('API Mock Server is running'))