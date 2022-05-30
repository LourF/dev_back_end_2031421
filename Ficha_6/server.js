const express = require('express');
const app = express();
const port = 3000;
var fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

//3
//A
// app.get('/', (req, res) => {
//     var body = "Hello world";
//     res.writeHead(200, {
//         "Content-Length": Buffer.byteLength(body),
//         "Content-Type": "text/plain"
//     });
//     res.end(body)
//   })

//B
// app.get('/', (req, res) => {
//     var body = "<h1> Ola <\h1>";
//     res.writeHead(200, {
//         "Content-Length": Buffer.byteLength(body),
//         "Content-Type": "text/html"
//     });
//     res.end(body)
//   })

//C

app.get('/', (req, res) => {
    log(req,res);
    var body = readFile('./index.html');
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
})

//D "text/plain" / "text/html"

//E
app.get('/replace', (req, res) => {
    log(req,res);
    var date = new Date();
    
    var body = readFile('./index.html');
     body = body.replace('send', date.toDateString())
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
})

//5 A

app.get('/user/:name', (req, res) => {
    log(req,res);
    var name = req.params.name;

    var body = readFile('./index.html');
     body = body.replace('send', name)
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
  })

  //6 

function log(req, res){
    var method = req.method;
    var path = req.route.path;
    var date = new Date();
    var str = "METHOD: " + method + ", PATH" + path + ", DATE: " + date.toDateString() + "\n";
    fs.appendFileSync("log.txt", str);

}

//7

app.get('/lista',(req, res) => {
    log(req,res);
    var body = readFile('log.txt');
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
})

//8

app.get('/download',(req, res) => {
    log(req,res);
    var file = ("log.txt");
    res.download(file);

})

//9

app.get('/clear',(req, res) => {
    log(req,res)
    var fs = require('fs')
    var path = './log.txt'
    body = "Foi apagado o ficheiro" + path;
try{
    fs.unlinkSync(path)
    
} catch (err){
    console.error(err)
}
res.end(body)
})