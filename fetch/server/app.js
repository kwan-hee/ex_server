const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
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
    console.log("req.body : ",req.body);
    todoList.push({
        id: id++,
        text,
        done,
    });
    return res.send('SUCCESS');
})

app.listen(4000,()=>{
    console.log("server start!");
})