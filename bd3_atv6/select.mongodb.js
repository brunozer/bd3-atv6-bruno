// Define o nome do banco de dados
const database = 'bd3-nosql-atlasmongodb'

use(database);


//  db['bd3-nosql-atv6-database'].find()

 db['bd3-nosql-atv6-database'].find({cpf: "234.567.890-01"}, {_id: 0})