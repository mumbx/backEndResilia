class Computer{
    constructor(description){
        if(description.length >= 7){
            this.description = description
        }
    }
}

module.exports = Computer;