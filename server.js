const express = require("express");
const app = express();
const compression = require("compression");
const PORT = process.env.PORT || 8080;
app.use(compression());

app.use(express.static("./public"));

if (process.env.NODE_ENV != "production") {
    console.log("1 app.use /bundle.js, require middleware");
    console.log(process.env);
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    console.log("2 in else app.use /bundle.js");
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, function() {
    console.log("I'm listening. a lot on", PORT);
});
