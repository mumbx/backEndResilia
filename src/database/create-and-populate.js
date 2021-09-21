const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const caminho = path.resolve(__dirname, '../', '../', 'database.db')
const db = new sqlite3.Database(caminho);

//==== Usuários
const STUDENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "STUDENTS" (
    "ENROLLMENTID" INTEGER PRIMARY KEY AUTOINCREMENT,    
    "NAME" varchar(64),
    "EMAIL" varchar(64),
    "BIRTHDATE" DATETIME    
  );  

  `;

const ADD_STUDENTS_SCHEMA_DATA = `
INSERT INTO STUDENTS (NAME, EMAIL, BIRTHDATE)
VALUES 
    ('Antonio', 'antonio@gmail.com', '12-21-16'),
    ('Antonio', 'antonio@gmail.com', '12-21-16'),
    ('Antonio', 'antonio@gmail.com', '12-21-16'),
    ('Antonio', 'antonio@gmail.com', '12-21-16')
    
`

function criaTabelaEstudante() {
    db.run(STUDENTS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de estudantes");
    });
}


function populaTabelaEstudante() {
    db.run(ADD_STUDENTS_SCHEMA_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de estudantes", error.message);
    });
}


//==== Tarefas
const COMPUTERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "COMPUTERS" (
    COMPUTERNUMBER INTEGER PRIMARY KEY AUTOINCREMENT,    
    DESCRIPTION TEXT   
);

`;

const ADD_COMPUTERS_DATA = `INSERT INTO COMPUTERS (DESCRIPTION)

VALUES 
       ('Intel core 2 quad, 4gb ram, 1tb de hd, DELL'),
       ('Intel core 2 quad, 4gb ram, 1tb de hd, DELL'),
       ('Intel core 2 quad, 4gb ram, 1tb de hd, DELL'),
       ('Intel core 2 quad, 4gb ram, 1tb de hd, DELL'),
       ('Intel core 2 quad, 4gb ram, 1tb de hd, DELL'),
       ('Intel core 2 quad, 4gb ram, 1tb de hd, DELL')       
       
`



function criaTabelaComputadores() {
    db.run(COMPUTERS_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de Computadores", error.message);
    });
}


function populaTabelaComputadores() {
    db.run(ADD_COMPUTERS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Computadores", error.message);
    });
}

const LOANS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LOANS" (
    IDLOANID INTEGER PRIMARY KEY AUTOINCREMENT, 
    LOANDATE DATETIME,
    RETURNDATE DATETIME,
    COMPUTERID INTEGER,
    STUDENTID INTEGER,
    FOREIGN KEY(STUDENTID) REFERENCES STUDENTS(ENROLLMENTID),    
    FOREIGN KEY(COMPUTERID) REFERENCES COMPUTERS(COMPUTERNUMBER)

);`;

function criaTabelaEmprestados() {
    db.run(LOANS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao Criar tabela Emprestados", error.message);
    });
}


db.serialize( ()=> {
    criaTabelaEstudante();
    populaTabelaEstudante();
    criaTabelaComputadores();
    populaTabelaComputadores();
    criaTabelaEmprestados();
});