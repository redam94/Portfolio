const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("assets"));

app.get("/", (requst, response) => {
    response.sendFile(__dirname+"/views/index.html")
});

app.get("/transformer", (request, response, next) => {
    console.log(request)
    response.sendFile(__dirname+"/assets/models/transformer/model.json");
});

app.get("/disaster", (request, response, next) => {
    console.log(request)
    response.sendFile(__dirname + "/assets/models/disaster/model.json");
});

const listener = app.listen(3999, () => {
    console.log("Your app is listening on port "+listener.address().port);
});
