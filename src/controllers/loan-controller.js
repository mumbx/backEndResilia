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

  app.get("/loans/availableComputers", async (req, res) => {
    try {
      const loans = await loanContext.getAvailableComputersForLoans();
      res.json(loans);
    } catch (error) {
      res.json(error);
    }
  });

  app.get("/loans/:id", async (req, res) => {
    try {
      const loan = await loanContext.getLoanById(req.params.id);
      res.json(loan);
    } catch (error) {
      res.json(error);
    }
  });

  app.delete("/loans/:id", async (req, res) => {
    try {
      const confirm = await loanContext.deleteLoan(req.params.id);     
      res.json(confirm);
    } catch (error) {
      res.json(error);
    }
  });

  app.post("/loans/create", async (req, res) => {      
    try {      
      const {loanDate, returnDate, computerId, studentId} = req.body  
      const computer = new Loan(loanDate, returnDate, computerId, studentId)
      const values = [computer.loanDate, computer.returnDate, computer.computerId, computer.studentId]           
      const created = await loanContext.createLoan(values);
      res.json(created);
    } catch (e) {
      res.json({error:e.message});
    }
  });

  app.put("/loans/:id", async (req, res) => {
    try{
        let id = req.params.id
        let {loanDate, returnDate, computerId, studentId} = req.body
        let updated = await loanContext.updateLoan(loanDate, returnDate, computerId, studentId, id)
        res.json({Message:"Os dados foram atualizados"})
      }catch(e){
        res.json({error:e.message})     
      }
  });  

};
