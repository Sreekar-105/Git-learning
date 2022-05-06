const express = require('express')
const path = require('path')
const app = express()
const port = 3000


// Custom middleware
const myMiddleware =(req,res,next) =>{
    console.log(req)
    next()   //Inorder to allow next middleware to run
}

// Serving the public folder using the middleware
app.use(express.static(path.join(__dirname,"public")))
// app.use(myMiddleware)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello/:name', (req, res) => {
    res.send('Hello World!' + req.params.name)
  })

app.get('/about', (req, res) => {
    res.send('about the page')
  })

app.get('/contact', (req, res) => {
    // res.sendFile(path.join(__dirname,'index.html'))
    res.json({"somesh":678})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})