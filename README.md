# ex_server

```c
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


let id = 2;

const todoList =[
    {
        id:1,
        text:'할 일',
        done: false,
    }
]


app.get('/api/todo', (req, res)=>{
    res. json(todoList);
});

app.post('/api/todo',(req,res)=>{
    const { text, done} = req.body;
    todoList.push({
        id: id++,
        text,
        done,
    });
    return res.send('SUCCESS');
})

app.listen(3000,()=>{
    console.log("server start!");
})
```

실행 : node app.js

post 실행은 postman에서 확인
http://localhost:3000/api/todo

참고 사이트
http://expressjs.com/en/5x/api.html#req.body

COR 정책에 막혔을 때 해결하는 법
https://www.npmjs.com/package/cors

$ npm install cors

```c
const express = require('express')
const cors = require('cors')
const app = express()
 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```
