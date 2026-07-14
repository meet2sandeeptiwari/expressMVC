import express from "express";
import cors from "cors";
const app = express();
import { MongoClient } from "mongodb";
import {
  handleUser4,
  handleDefault,
  hadleAddForm,
  handleAddStudent,
  HandlerDeleteStudent,
  HandlerUpdateStudent,
  HandlerEJSDeleteStudent,
  handleerEJSAddStudent,
  handleUpdateEJSStudent,
} from "./controller/user4controller.js";

let result;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/api", handleDefault);
app.get("/userresult", handleUser4);
app.get("/add", hadleAddForm);
app.post("/add-student", handleAddStudent);
app.delete("/delete/:id", HandlerDeleteStudent);
app.patch("/update/:id", HandlerUpdateStudent);

////////////////////////ejs////////////////////////////////
app.delete("/deleteEjs/:id", HandlerEJSDeleteStudent);
app.post("/add-ejs-student", handleerEJSAddStudent);
app.post("/update-ejs-student/:id", handleUpdateEJSStudent);

/////////////////////////////////////////////////////////

app.listen(3200, () => {
  console.log("server is starte at port 3200");
});
