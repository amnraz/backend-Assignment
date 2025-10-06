const express = require('express');
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
    res.send( '<h> Welcome to the Home page </h>');
});
app.get("/aboutus", (req, res) => {
    res.json({ "message": "Welcome to About Us" })
});
app.get("/contactus", (req,res)=> {
    const contactDetails= {
        name: "Alice Doe",
        email: "dummy@gamimail.com",
        address: "123 Dummy St, Faketown, FK 12345",
    };
    res.json(contactDetails);
});
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});










app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});