const express = require("express");
const app = express();
const cors = require("cors");


const sequelize = require("./sequelize");
const contact = require('./route/contact.route')
const project = require('./route/project.route')
const formation = require('./route/formation.route')
const skills = require('./route/skills.route')


const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/contacts', contact)
app.use('/projects', project)
app.use('/formations', formation)
app.use('/skills', skills)

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Welcome to my API</h1>");
});

async function main() {
  try {
    await sequelize.sync({alter:true});
    await sequelize.authenticate();
    app.listen(PORT, (err) => {
      if (err) throw new Error(err.message);
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Unable to join database", error.message);
  }
}
main()
