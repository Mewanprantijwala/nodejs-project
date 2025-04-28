const http = require ('http')

const app = http.createServer((req,res)=>{
    console.log(req.url)

    switch(req.url){
        case"/":
        res.end ("<h1>home page <h1>")

        break
         
        case"/about":
        res.end ("<h1>About page<h1>")

        break

        default:
            res.end("")

    }
})

app.listen(5000,() => {
    console.log("listen port number 5000 ")
})