class ComputerContext {
  constructor(bd) {
    this.bd = bd;
  }

  getComputers() {
    return new Promise((resolve, reject) => {
      this.bd.all("SELECT * FROM Computers", (err, rows) => {
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

  getComputerById(id) {
    return new Promise((resolve, reject) => {
      let query = `SELECT * FROM Computers WHERE computerNumber = ${id}`;
      this.bd.all(query, (err, rows) => {
        if (err) {
          reject({ error: err.message });
        } else {
          resolve({ result: rows });
        }
      });
    });
  }

  deleteComputer(id) {
    return new Promise((resolve, reject) => {
      let query = "DELETE FROM Computers WHERE computerNumber = (?)";
      this.bd.run(query, id, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ Message: "O equipamento foi deletado" });
        }
      });
    });
  }

  createComputer(values) {
    return new Promise((resolve, reject) => {
      const insert = "INSERT INTO COMPUTERS(DESCRIPTION) VALUES(?)";

      this.bd.run(insert, values, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ Message: "O registro foi criado" });
        }
      });
    });
  }

  updateComputer(description, id) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE Computers SET Description = ? WHERE computerNumber = ?";
      const params = [description, id];

      this.bd.run(query, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ Message: "O equipamento foi atualizado" });
        }
      });
    });
  }
}

module.exports = ComputerContext;
