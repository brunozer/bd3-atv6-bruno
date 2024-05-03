// Define o nome do banco de dados
const database = 'bd3-nosql-atlasmongodb'

// define o nome da collection
const collection = 'bd3-nosql-atv6-database'

// acessa o banco de dados libri-database
use(database);

//create colection
db.createCollection(collection);