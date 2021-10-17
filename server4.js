const fs = require("fs")
const http = require("http");
const { url } = require("inspector");
const products = JSON.stringify([{name: "steering wheel",  price: 5000, pic: "https://media.istockphoto.com/photos/drift-car-steering-wheel-picture-id172216784?k=20&m=172216784&s=612x612&w=0&h=axibDAFrT2C6DpFJTQJiBUYW2KbelheagxDdICXaRIc="}, {name: "Scent tree",  price: 35, pic: "https://media.istockphoto.com/photos/fragrance-for-the-car-interior-made-in-the-form-of-a-green-tree-of-picture-id1286867220?k=20&m=1286867220&s=612x612&w=0&h=MPaHv9OhiCpDCDHhCTFhQpDK6xDrJX90-DOFXsC3T6I="}, {name: "Car wipers",  price: 250, pic: "https://media.istockphoto.com/photos/windscreen-wiper-picture-id538780811?k=20&m=538780811&s=612x612&w=0&h=_ld_cUBrBY3qa6BHCw4-N8aUzCJ7nlGNg5-PYReV9gc="}, {name: "car coolant",  price: 85, pic: "https://media.istockphoto.com/photos/auto-mechanic-showing-antifreeze-plastic-container-in-the-auto-repair-picture-id1187582453?k=20&m=1187582453&s=612x612&w=0&h=CmGcqRc3gfUguRW5YwYUmd6DKRdy3KymoD8tDhPYCxg="}, {name: "car multimedia system",  price: 1500, pic: "https://media.istockphoto.com/photos/smart-touch-screen-multimedia-system-for-automobile-picture-id533260643?k=20&m=533260643&s=612x612&w=0&h=TYzBwCybAiECyEQc_5l0r9OyOz9RAl2Ib1bWdpCFeeE="}]);
const product = JSON.stringify([{name: "steering wheel",  price: 5000, pic: "https://media.istockphoto.com/photos/drift-car-steering-wheel-picture-id172216784?k=20&m=172216784&s=612x612&w=0&h=axibDAFrT2C6DpFJTQJiBUYW2KbelheagxDdICXaRIc="}]);
const server = http.createServer((req, res) => { 
    switch (req.url) {
        case "/":
            fs.readFile("./public/index.html", "utf8", (err, data)=>{
                if(err){
                    return err
                }
                else{
                    res.write(data)
                }
                res.end();
                
            })
            break;
    
        case "/about":
            fs.readFile("./public/about.html","utf8", (err, data)=>{
                if(err){
                    return err
                }
                else{
                    res.write(data)
                }
                res.end();
                
            })
            break;

        case "/sales":
            fs.readFile("./public/sales.html","utf8", (err, data)=>{
                if(err){
                    return err
                }
                else{
                    res.write(data)
                }
                res.end();
                
            })
            break;

        case "/products":
            res.write(products);
            break;

        case "/product":
            res.write(product);
            break;    
        
        default:
            res.writeHead(404)
            res.write("page not found");
            break;
        }
        
});
server.listen(2000)