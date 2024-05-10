require('dotenv').config();
const http = require("http");
const fs = require("fs");
var requests = require("requests");
const PORT = 8000

const homeFile = fs.readFileSync("home.html", "utf-8");   // homeFile ma humne apan html/homeFile ka data get kr liya backend ma ab hum us k sath khalain ge  


const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

  return temperature;
};

fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={%27d965dcd3539d25f661d3f39dde0cce3f%27}').then(data => data.json()).then(data => console.log(data))
const server = http.createServer((req, res) => {
  if (req.url == "/") {   // (/) means home page pr data dikhana ha weather info ka
    requests(
      //"http://api.openweathermap.org/data/2.5/weather?q=pune&appid=d965dcd3539d25f661d3f39dde0cce3f"
       `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={%27d965dcd3539d25f661d3f39dde0cce3f%27}`
    )
      .on("data", (chunk) => {    // is data ki jagah kuch aur nhi likh skte ye built in event ha event emitter ka 
        const objdata = JSON.parse(chunk);   // jese jese weather api se data chunks mil rhe wese wese dikhata jayega chunks by chunk
        const arrData = [objdata];  // coverting js object to array
        // console.log(arrData[0].main.temp);
        const realTimeData = arrData 
          .map((val) => replaceVal(homeFile, val))
          .join("");    // data jo array format ma milrha tha ab string format ma mil jayega
        res.write(realTimeData);
        // console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  } else {
    res.end("File not found");
  }

});

server.listen(PORT, ()=> console.log(`Server is listening at https://localhost:${PORT}`))