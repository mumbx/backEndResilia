class LoanContext {
  constructor(bd) {
    this.bd = bd;
  }

  getLoans() {
    return new Promise((resolve, reject) => {
      this.bd.all("SELECT * FROM Loans", (err, rows) => {
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
      let query = `SELECT * FROM Loans WHERE loanId = ${id}`;
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

}

module.exports = LoanContext;
