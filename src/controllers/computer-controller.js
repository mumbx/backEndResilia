const Computer = require("../models/Computer");
const ComputerContext = require("../context/computerContext");

module.exports = (app, bd) => {
  const computerContext = new ComputerContext(bd);

  app.get("/computers", async (req, res) => {
    try {
      const computers = await computerContext.getComputers();      
      res.json(computers);
    } catch (error) {
      res.json(error);
    }
  });

  app.get("/computers/:id", async (req, res) => {
    try {
      const computer = await computerContext.getComputerById(req.params.id);      
      res.json(computer);
    } catch (error) {
      res.json(error);
    }
  });

  app.delete("/computers/:id", async (req, res) => {
    try {
      const confirm = await computerContext.deleteComputer(req.params.id);      
      res.json(confirm);
    } catch (error) {
      res.json(error);
    }
  });

  app.post("/computers/create", async (req, res) => {      
    try {      
      const computer = new Computer(req.body.description)
      const values = [computer.description]             
      const created = await computerContext.createComputer(values);
      res.json(created);
    } catch (e) {
      res.json({error:e.message});
    }
  });

  app.put("/computers/:id", async (req, res) => {
    try{
        let id = req.params.id        
        let updated = await computerContext.updateComputer(req.body.description , id)
        res.json(updated)
      }catch(e){
        res.json({error:e.message})     
      }
  });

};
