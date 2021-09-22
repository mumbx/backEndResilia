const Loan = require("../models/Loan");
const LoanContext = require("../context/loanContext");

module.exports = (app, bd) => {
  const loanContext = new LoanContext(bd);

  app.get("/loans", async (req, res) => {
    try {
      const loans = await loanContext.getLoans();
      res.json(loans);
    } catch (error) {
      res.json(error);
    }
  });

  app.get("/loans/:id", async (req, res) => {
    try {
      const loan = await loanContext.getLoans(req.params.id);
      res.json(loan);
    } catch (error) {
      res.json(error);
    }
  });

  app.delete("/loans/:id", async (req, res) => {
    try {
      const confirm = await loanContext.getLoans(req.params.id);     
      res.json(confirm);
    } catch (error) {
      res.json(error);
    }
  });

  app.post("/loans/create", async (req, res) => {      
    try {      
      const {loanDate, returnDate, computerId, studentId} = req.body  
      const computer = new Loan(loanDate, returnDate, computerId, studentId)
      const values = [loanDate, returnDate, computerId, studentId]           
      const created = await loanContext.createLoan(values);
      res.json(created);
    } catch (e) {
      res.json({error:e.message});
    }
  });

};
