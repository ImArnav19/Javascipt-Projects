

// const os = require('os');
// const user = os.userInfo();
// console.log(`The System time is ${os.uptime()}`);

// const curros = {
//     name :os.type(),
//     release:os.release(),
//     totalMem : os.totalmem(),
//     freemem:os.freemem(),
// }

// console.log(curros);


// const path = require('path')

// console.log(path.sep);

// const filePath = path.join(__dirname,'subfolder','test_1.txt')
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base)


// const {readFileSync, writeFileSync} = require('fs');
// const first = readFileSync('test_1.txt');
// writeFileSync('result_sync.txt',`Here is the String to be added : ${first}`)

//


// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.write("This is out Home page");
//         res.end();
//     }
//     if(req.url === '/about'){
//         res.write("This is out about page");
//         res.end();
//     }
//     else{
//         res.write("<h1>Hello Baby</h1><p>You r on the wrong page <a href='/''>Click to home</a></p>");
//         res.end();
//     }
   

// })

// server.listen(3000,console.log("Port fine"));


//





// const {readFile,writeFile}= require('fs').promises;
// const get_text = (path)=>{
//     return new Promise((resolve, reject) => {
//         readFile(path,'utf-8',(err,res)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(res);
//             }
//         })
        
//     })
// }

// get_text("./test_1.txt")
//     .then((resp)=>{console.log(resp)})
//     .catch((err)=>{console.log(err)})

// const start = async()=>{
//     try{
//         const first = await readFile("./test_1.txt",'utf-8');
//         const second = await readFile("./result_sync.txt","utf-8");
    
//         await writeFile("./result_promise",`This is awesome :${first}+=${second}`,'utf-8',{ flag:'a' });
//     }

//     catch(err){
//         console.log(err);
//     }
// }

//


// const eventemitter = require('events');
// const custom_event = new eventemitter();
// custom_event.on('resp',(name,age)=>{
//     console.log(`data received from ${name} and his age is ${age}`);
// })

// custom_event.emit('resp','arnav'); 



const { error } = require('console');
const {createReadStream}=require('fs');

const stream = createReadStream('./test_1.txt',{encoding:'utf-8'})

stream.on('data',(res)=>{
    console.log(res);
})

stream.on('error',(err)=>{
    console.log(err);
})









 

