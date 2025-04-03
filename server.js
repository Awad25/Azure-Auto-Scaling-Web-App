const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (if you have any assets like CSS or JS)
app.use(express.static(__dirname)); // Serving from the current directory

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});