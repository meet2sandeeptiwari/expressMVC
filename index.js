import express from "express";
import { handleRoutes, handleUsers,handleDynamicUsers, handleDynamicRoutes } from "./controller/usercontroller.js";

const app = express();

app.set("view engine", "ejs");

app.get("/user", handleUsers);

app.get("/DynamicUser", handleDynamicUsers);

app.get("/DynamicUser/:name", handleDynamicRoutes);

app.listen(3200, () => {
  console.log("Server running on http://localhost:3200");
});
