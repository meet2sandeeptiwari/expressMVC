import { usersList } from "../model/userModel.js";

const usersData = usersList();

export function handleUsers(req, resp) {
  console.log(usersData);
  resp.render("user", { users: usersData });
}

export function handleRoutes(req, resp) {
  let data = `<ul>`;
  for (let i = 0; i <= usersData.length; i++) {
    data += `<li><a href="user/${usersData[i]}">${usersData[i]}</a></li>`;
  }
  data += "</ul>";
  resp.send(data);
}

export function handleDynamicUsers(req, resp) {
   let data = `<ul>`;
  for (let i = 0; i <= usersData.length; i++) {
    data += `<li><a href="/DynamicUser/${usersData[i]}">${usersData[i]}</a></li>`;
  }
  data += "</ul>";
  resp.send(data);
}

export function handleDynamicRoutes(req, resp) {
   resp.send(`this is required page for user: ${req.params.name} `); 
}