class Computer{
    constructor(description){
        if(description.length >= 7){
            this.description = description
        }else{
            throw new Error('Descrição inválida')
        }
    }
}

module.exports = Computer;