const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 5000;

const app = http.createServer((req, res) => {
    console.log(req.url);

    // Set content type for the response
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');

    switch (req.url) {
        case "/":
            fs.readFile('Pages/Home.html', 'utf-8', (err, content) => {
                if (err) console.log(err);
                else res.end(content);
            });
            break;

        case "/about":
            const aboutfile = path.join(__dirname, 'Pages/About.html');
            fs.readFile(aboutfile, 'utf-8', (err, content) => {
                if (err) console.log(err);
                else res.end(content);
            });
            break;

        case "/contact":
            const contact = path.join(__dirname, 'Pages/Contact.html');
            fs.readFile(contact, 'utf-8', (err, content) => {
                if (err) console.log(err);
                else res.end(content);
            });
            break;
          
        case "/form":
            const form = path.join(__dirname, 'Pages/Form.html');
            fs.readFile(form, 'utf-8', (err, content) => {
                if (err) console.log(err);
                else res.end(content);
            });
            
            break;
                




     
        default:
            res.statusCode = 404;
            res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
            break;
    }
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
