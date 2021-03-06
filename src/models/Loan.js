class Loan {
  constructor(loanDate, returnDate, computerId, studentId) {
    if (loanDate.length >= 5) {
      this.loanDate = new Date(loanDate).toLocaleDateString();
    } else {
      throw new Error("O formato da data é inválido");
    }
    if (returnDate.length >= 5) {
      this.returnDate = new Date(returnDate).toLocaleDateString();
    } else {
      throw new Error("O formato da data é inválido");
    }
    if (studentId && typeof studentId == "number") {
      this.studentId = studentId;
    } else {
      throw new Error("Usuário inválido");
    }
    console.log(computerId)
    if (computerId && typeof computerId == "number") {
      this.computerId = computerId;
    } else {
      throw new Error("Computador inválido");
    }
  }
}

module.exports = Loan;
