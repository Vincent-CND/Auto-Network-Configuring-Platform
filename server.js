import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})


app.get("/main", (req,res) => {
  res.render("main.ejs")
})

app.get("/about", (req,res) => {
  res.render("about.ejs")
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

