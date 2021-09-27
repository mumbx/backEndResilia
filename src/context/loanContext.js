class LoanContext {
  constructor(bd) {
    this.bd = bd;
  }

  getLoans() {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT loanid, S.name, C.description, loanDate, returnDate FROM 
      Loans L 
      INNER JOIN 
      Students S     
      ON S.enrollmentId = L.studentid
      JOIN Computers C
      ON C.computerNumber = L.computerid `
      
      this.bd.all(query, (err, rows) => {
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

  getAvailableComputersForLoans() {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT * FROM Computers WHERE computerNumber NOT IN (
        select computerid from Loans
      )      
      `      
      this.bd.all(query, (err, rows) => {
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

  getLoanById(id) {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT * FROM 
      Loans L 
      INNER JOIN 
      Students S     
      ON S.enrollmentId = L.studentid
      JOIN Computers C
      ON C.computerNumber = L.computerid
      where loanid = ${id} `

      this.bd.all(query, (err, rows) => {
        if (err) {
          reject({ error: err.message });
        } else {
          resolve({ result: rows });
        }
      });
    });
  }

  deleteLoan(id) {
    return new Promise((resolve, reject) => {
      let query = "DELETE FROM Loans WHERE loanId = (?)";
      this.bd.run(query, id, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ Message: "Registro Deletado" });
        }
      });
    });
  }

  createLoan(values) {
    return new Promise((resolve, reject) => {
      const insert =
        "INSERT INTO LOANS(LOANDATE, RETURNDATE, COMPUTERID, STUDENTID) VALUES(?, ?, ?, ?)";

      this.bd.run(insert, values, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ Message: "O Registro foi criado" });
        }
      });
    });
  }

  updateLoan(loanDate, returnDate, computerId, studentId, id) {
    return new Promise((resolve, reject) => {
      let query = "UPDATE LOANS SET";
      let params = [id];
      let data = [];
      let changes = 0;

      if (loanDate != null) {
        params.unshift(loanDate);
        data.unshift(" loanDate =?");
        ++changes;
      }

      if (returnDate != null) {
        params.unshift(returnDate);
        data.unshift(" returnDate =?");
        ++changes;
      }

      if (computerId != null) {
        params.unshift(computerId);
        data.unshift(" computerId =?");
        ++changes;
      }

      if (studentId != null) {
        params.unshift(studentId);
        data.unshift(" studentId =?");
        ++changes;
      }

      query += data.join(",") + " WHERE loanId = ?";

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

module.exports = LoanContext;
