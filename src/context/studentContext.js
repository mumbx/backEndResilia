class StudentContext {
  constructor(bd) {
    this.bd = bd;
  }

  getStudents() {
    return new Promise((resolve, reject) => {
      this.bd.all("select * from students", (err, rows) => {
        if (err) {
          reject({ error: err.message });
        } else {
          resolve({
            Results: rows,
            Length: rows.length,
          });
        }
      });
    });
  }

  getStudentById(id) {
    return new Promise((resolve, reject) => {
      let query = `select * from students where enrollmentid = ${id}`;
      this.bd.all(query, (err, rows) => {
        if (err) {
          reject({ error: err.message });
        } else {
          resolve({ result: rows });
        }
      });
    });
  }

  deleteStudent(id) {
    return new Promise((resolve, reject) => {
      let query = "delete from students where enrollmentid = (?)";
      this.bd.run(query, id, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ Message: "Estudante Deletado" });
        }
      });
    });
  }

  createStudent(values, student) {
    return new Promise((resolve, reject) => {
      const insert =
        "INSERT INTO STUDENTS(NAME, EMAIL, BIRTHDATE) VALUES(?, ?, ?)";

      this.bd.run(insert, values, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ Message: "O Aluno " + student.name + " foi criado" });
        }
      });
    });
  }

  updateStudent(name, email, birthdate, id) {
    return new Promise((resolve, reject) => {
      let query = "UPDATE STUDENTS SET";
      let params = [id];
      let data = [];
      let changes = 0;

      if (name != null) {
        params.unshift(name);
        data.unshift(" name =?");
        ++changes;
      }

      if (email != null) {
        params.unshift(email);
        data.unshift(" email =?");
        ++changes;
      }

      if (birthdate != null) {
        params.unshift(birthdate);
        data.unshift(" birthdate =?");
        ++changes;
      }

      query += data.join(",") + " WHERE ENROLLMENTID = ?";

      console.log(query, params);

      this.bd.run(query, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ Changes: changes });
        }
      });
    });
  }
}

module.exports = StudentContext;
