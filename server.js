const express = require('express')
const app = express()
const { loadBlogs} = require('./user.model')
const port = 3000
const cors = require('cors')

app.use(cors())
app.listen(port,()=>{
    console.log('server running')
})
app.get('/',(req,res)=>{
    // res.setHeader('content-type','application-json')
    res.send(loadBlogs())
})
app.get('/:id',(req,res)=>{
    const id  = req.params.id
    const blogs = loadBlogs();
    const blog = blogs.find((p)=>p.id === parseInt(id));
    if (blog) {
        res.send(blog)
    }
    res.setHeader('Content-Type', 'text/plain');
    res.send(blog)
})