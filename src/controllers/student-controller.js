const moment = require("moment");
const Student = require("../models/Student");
const StudentContext = require("../context/studentContext");

module.exports = (app, bd) => {

  const studentContext = new StudentContext(bd);

  app.get("/students", async (req, res) => {
    try {
      const students = await studentContext.getStudents();
      res.json(students);
    } catch (e) {
      res.json(e);
    }
  });

  app.get("/students/:id", async (req, res) => {
    try {
      const student = await studentContext.getStudentById(req.params.id);
      res.json(student);
    } catch (e) {
      res.json(e);
    }
  });

  app.delete("/students/:id", async (req, res) => {
    try {
      const confirm = await studentContext.deleteStudent(req.params.id);
      res.json({ Message: "estudante Deletado" });
    } catch (e) {
      res.json(e);
    }
  });

  app.post("/students/create", async (req, res) => {
    console.log(req.body)   
    try {
      const {name, email, birthdate} = req.body
      const student = new Student(name, email, birthdate)
      const values = [student.name, student.email, student.birthDate]             
      const created = await studentContext.createStudent(values, student);
      res.json(created);
    } catch (e) {
      res.json({error:e.message});
    }
  });


  app.put("/students/:id", async (req, res) => {
    try{
        let id = req.params.id
        let {name, email, birthdate} = req.body
        let updated = await studentContext.updateStudent(name, email, birthdate, id)
        res.json(updated)
      }catch(e){
        res.json({error:e.message})     
      }
  });  

};
