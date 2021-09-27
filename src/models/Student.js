class Student {
  constructor(name, email, birthDate) {
    if (
    name.length >= 3 &&
      name.length <= 50 &&
      name.split(' ').length > 1
    ) {
      this.name = name;
    } else {
      throw new Error("O nome digitado é inválido");
    }

    if (this.ValidateEmail(email)) {
      this.email = email;
    } else {
      throw new Error("O e-mail digitado é inválido");
    }

    if (birthDate) {
      this.birthDate = new Date(birthDate).toLocaleDateString();
    } else {
      throw new Error("Data de nascimento inválida");
    }
  }

  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
}

module.exports = Student;
