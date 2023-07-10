const express = require ('express');
const fs = require('fs');

const app = express();
const PORT = 8080;

app.use('/home', (req, res)=>{
    fs.readFile('../appHome.js', (err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
});

app.use('/gallery', (req, res)=>{
    fs.readFile('../app.js', (err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
});

app.use('/inspect', (req, res)=>{
    fs.readFile('../app.js', (err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
});

app.listen(proccess.env.PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`);
})