// const fs = require("fs")
// const http = require("http");
// const { url } = require("inspector");
// const cars = JSON.stringify([{model: "tesla",  Date: 2021, price: 210000}, {model: "mazda",  Date: 2020, price: 190000}, {model: "bmw",  Date: 2020, price: 200000}]);
// const server = http.createServer((req, res) => { 
//     switch (req.url) {
//         case "/":
//             fs.readFile("./public/index.html","utf8", (err, data)=>{
//                 if(err){
//                     return err
//                 }
//                 else{
//                     res.write(data)
//                 }
//                 res.end();
                
//             })
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
//             res.write("page not found");
//             break;
//         }
        
// });
// server.listen(2000)