const database = 'bd3-nosql-atlasmongodb'

// define o nome da collection
const collection = 'bd3-nosql-atv6-database'

// acessa o banco de dados libri-database
use(database);

// insere um documento de dados na colection
db['bd3-nosql-atv6-database'].insertOne(
    {
        "nome": "bruno",
        "cpf": "11111111111",
        "rg": "111111111",
        "telefone_aluno": "11111111111",
        "telefone_responsavel": "22222222222",
        "email": "teste1@gmail.com",
        "data_nascimento": "01/05/2005"
    },
);
