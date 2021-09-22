const path = require('path')
const caminho = path.resolve(__dirname, '../', '../', 'database.db')
const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database(caminho);

module.exports = bd;