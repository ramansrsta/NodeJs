const fs = require('fs');

const requestHandler = (req,res) => 
{
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title> Enter message nigga </title></head>');
        res.write('<body><form method="POST" action="/message"><input type="text" name="message"><button type="submit">Submit </button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data',(chunk)=>
        {
            // console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>
        {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> My Firs Node app</title></head>');
    res.write('<body> <h1>Hello from the server </h1></body>');
    res.write('</html>');
    res.end();
};


module.exports = requestHandler;