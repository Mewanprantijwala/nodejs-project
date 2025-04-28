const http = require ('http')
const fs = require ('fs')
const path = require ('path')
const port = 5000;

const app = http.createServer((req,res)=>{
    console.log(req.url)

    switch(req.url){
        case"/":
  fs.readFile ('Pages/Home.html','utf-8',(err , content) => {
    if(err)console.log(err)
    else res.end (content)
  })
    
  
    break
         
        case"/about":
        const aboutfile = path.join (__dirname, 'Pages/About.html')
        fs.readFile(aboutfile,'utf-8', (err, content) => {
            if(err)console.log(err)
            else res.end (content)
        })
      

        break


        case"/contact":
        const contact = path.join (__dirname, 'Pages/Contact.html')
        fs.readFile(contact,'utf-8', (err, content) => {
            if(err)console.log(err)
            else res.end (content)
        })


        break




        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1>404 page not found<h1>")

    }
})
 
app.listen(port,() => {
    console.log(`listen port number http://localhost:${port}`)
})