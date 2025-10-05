const express = require("express");
const app = express()
const port = 3000;

app.get("/home", (req, res) => {
    res.send("Welcome to Home Page");
});
 
app.get("/contactUs", (req, res) => {
    res.send("Contact us at contact@contact.com");
});

app.get("/aboutUs", (req, res) => {
    res.send("Welcome to About page..!");
});
 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});