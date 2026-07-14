import {
  dbConnection,
  addDataToDB,
  deleteDataToDB,
  UpdateStudentToDB,
} from "../model/user4Model.js";

//get student from ejs file////////////////////////////////////////////////////////////////////////
export async function handleUser4(req, res) {
  const result = await dbConnection();
  res.render("user4", {
    result,
  });
}

//delete student from ejs file
export async function HandlerEJSDeleteStudent(req, res) {
  const result = await deleteDataToDB(req.params.id);

  res.json({
    message: "Student deleted successfully",
  });
}

//Add student from ejs file
export async function handleerEJSAddStudent(req, resp) {
  const result = await addDataToDB(req.body);

  if (result.acknowledged) {
    resp.redirect("/userresult");
  } else {
    resp.send("Data not inserted");
  }
}

//update student from ejs file

export async function handleUpdateEJSStudent(req,res){
    const result = await UpdateStudentToDB(req);
    res.redirect("/userresult");

}

/////////////////////////////////////////////////////////////////////////////

export async function handleDefault(req, resp) {
  const result = await dbConnection();
  resp.send(result);
}

export function hadleAddForm(req, resp) {
  resp.render("add-students4");
}

export async function handleAddStudent(req, resp) {
  console.log(req.body);
  const { name, age, email } = req.body;
  if (!name || !age || !email) {
    resp.send({ status: 400, message: "opearation failed", success: false });
  }
  const result = await addDataToDB(req.body);
  console.log(req.body);
  resp.send({ status: 200, message: "data stored", success: true });
}

export async function HandlerDeleteStudent(req, res) {
  const result = await deleteDataToDB(req.params.id);
  if (result.deletedCount > 0) {
    res.send({
      status: 200,
      id: req.params.id,
      message: "Student deleted successfully",
      success: true,
    });
  } else {
    res.send({
      status: 404,
      message: "Student not found",
      success: false,
    });
  }
}

export async function HandlerUpdateStudent(req, resp) {
  const result = await UpdateStudentToDB(req, resp);
  if (result.modifiedCount > 0) {
    resp.send({
      status: 200,
      message: "Student updated successfully",
      success: true,
    });
  } else {
    resp.send({
      status: 404,
      message: "Student not found",
      success: false,
    });
  }
}
