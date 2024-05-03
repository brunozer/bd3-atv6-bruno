// Define o nome do banco de dados
const database = 'bd3-nosql-atlasmongodb'

use(database);


db['bd3-nosql-atv6-database'].insertMany(
    [
        {
            "nome": "Fernando Oliveira",
            "data_nascimento": "2005-10-17",
            "cpf": "234.567.890-01",
            "rg": "890123456",
            "email": "fernando.oliveira@example.com",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 12345-6789"
        },
        {
            "nome": "Amanda Rodrigues",
            "data_nascimento": "1994-12-03",
            "cpf": "890.123.456-01",
            "rg": "901234567",
            "email": "amanda.rodrigues@example.com",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 12345-6789"
        },
        {
            "nome": "Roberto Santos",
            "data_nascimento": "2000-07-29",
            "cpf": "567.890.123-01",
            "rg": "012345678",
            "email": "roberto.santos@example.com",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 12345-6789"
        },
        {
            "nome": "Carolina Lima",
            "data_nascimento": "1998-04-14",
            "cpf": "901.234.567-01",
            "rg": "123456789",
            "email": "carolina.lima@example.com",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 12345-6789"
        },
        {
            "nome": "Lucas Souza",
            "data_nascimento": "2003-01-22",
            "cpf": "678.901.234-01",
            "rg": "234567890",
            "email": "lucas.souza@example.com",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 12345-6789"
        },
        {
            "nome": "Isabela Fernandes",
            "data_nascimento": "2002-08-11",
            "cpf": "345.678.901-01",
            "rg": "345678901",
            "email": "isabela.fernandes@example.com",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 12345-6789"
        },
        {
            "nome": "Diego Pereira",
            "data_nascimento": "1997-06-25",
            "cpf": "012.345.678-01",
            "rg": "456789012",
            "email": "diego.pereira@example.com",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 12345-6789"
        },
        {
            "nome": "Camila Barbosa",
            "data_nascimento": "2001-03-19",
            "cpf": "789.012.345-01",
            "rg": "567890123",
            "email": "camila.barbosa@example.com",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 12345-6789"
        },
        {
            "nome": "Thiago Almeida",
            "data_nascimento": "1999-09-08",
            "cpf": "456.789.012-01",
            "rg": "678901234",
            "email": "thiago.almeida@example.com",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 12345-6789"
        },
        {
            "nome": "Patrícia Oliveira",
            "data_nascimento": "2004-05-12",
            "cpf": "123.456.789-01",
            "rg": "789012345",
            "email": "patricia.oliveira@example.com",
            "telefone_aluno": "(11) 98765-4321",
            "telefone_responsavel": "(11) 12345-6789"
        }
    ]
)