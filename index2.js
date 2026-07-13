import express from "express";

const app = express();

const usersData=['Anil', 'Sam', 'Peter', 'Bruce', 'Tony'];

app.get("/user", (req, resp) => {
  let data = `<ul>`;
  for (let i = 0; i <= usersData.length; i++) {
    data += `<li><a href="/user/${usersData[i]}">${usersData[i]}</a></li>`;
  }
  data += "</ul>";
  resp.send(data);
});

app.get("/user/:name", (req, resp) => {
   resp.send(`this is required page for user: ${req.params.name} `); 
});

app.listen(3200, () => {
  console.log("Server running on http://localhost:3200");
});
