const express = require('express')
const cors = require('cors')

const routes = require('./routes')
const app = express()


app.use(cors())
app.use(express.json())
/*
Métodos HTTP:

GET: Buscar informação no backend
POST: Criar informação no backend
PUT: Alterar informação no backend
DELETE: Deletar informação no backend
*/

/*
Tipos de parametros

Query params: Parametros nomeados enviados depois do "?"(Filtros,paginação)
Route params: Parametros utilizados para identificar recursos
Request body:Corpo da requisição, utilizado para criar ou alterar usuario


*/


/*
Banco de Dados
SQL: maior controle sobre a estrutura
NoSQL: pouco estruturado

*/

/*
Driver: SELECT * FROM users
Query builder: table('users').select('*').where()

*/
app.use(routes)


app.listen(3333)