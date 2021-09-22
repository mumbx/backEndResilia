class Loan {
  constructor(loanDate, returnDate, studentId, computerId) {
    if (loanDate.length >= 5) {
      this.loanDate = loanDate;
    } else {
      throw new Error("O formato da data é inválido");
    }
    if (returnDate.length >= 5) {
      this.returnDate = returnDate;
    } else {
      throw new Error("O formato da data é inválido");
    }
    if (studentId && typeof studentId == "number") {
      this.studentId = studentId;
    } else {
      throw new Error("Usuário inválido");
    }
    if (computerId && typeof computerId == "number") {
      this.computerId = computerId;
    } else {
      throw new Error("Computador inválido");
    }
  }
}

module.exports = Loan;
