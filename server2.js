// const http = require("http");
// const { url } = require("inspector");
// const server = http.createServer((req, res) => { 
//     switch (req.url) {
//         case "/":
//             res.write("welcome to home page");
//             break;
    
//         case "/about":
//             res.write("welcome to about page");
//             break;

//         case "/blog":
//             res.write("welcome to th blog page")  ;
//             break;

//         case "/blog/post":
//             res.write("welcome to the post page");
//             break;
        
//         default:
//             res.writeHead(404)
//             res.write("page not found");
//             break;
//         }
//         res.end();
// });
// server.listen(2000)
///////////////////////////////////////////////////////////////////////////////////

// const http = require("http");
// const { url } = require("inspector");
// const article = JSON.stringify({title: "title1", author: "author1", Date: new Date()});
// const server = http.createServer((req, res) => { 
//     switch (req.url) {
//         case "/":
//             res.write(article);
//             break;
    
//         case "/about":
//             res.write(article);
//             break;

//         case "/blog":
//             res.write(article)  ;
//             break;

//         case "/blog/post":
//             res.write(article);
//             break;
        
//         default:
//             res.writeHead(404)
//             res.write("page not found");
//             break;
//         }
//         res.end();
// });
// server.listen(2000)
///////////////////////////////////////////////////////////////

// const http = require("http");
// const { url } = require("inspector");
// const cars = JSON.stringify([{model: "tesla",  Date: 2021, price: 210000}, {model: "mazda",  Date: 2020, price: 190000}, {model: "bmw",  Date: 2020, price: 200000}]);
// const server = http.createServer((req, res) => { 
//     switch (req.url) {
//         case "/":
//             res.write(cars);
//             break;
    
//         case "/about":
//             res.write("welcome to about page");
//             break;

//         case "/blog":
//             res.write("welcome to blog page")  ;
//             break;

//         case "/blog/post":
//             res.write("welcome to post page");
//             break;

//         case "/cars":
//             res.write(cars);
//             break;    
        
//         default:
//             res.writeHead(404)
//             res.write();
//             break;
//         }
//         res.end();
// });
// server.listen(2000)