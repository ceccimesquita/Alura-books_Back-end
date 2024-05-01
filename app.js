const express = require("express") //função que cria um servidor express
const rotaLivro = require("./rotas/livro")

const app = express()
app.use(express.json())

app.use('/livros', rotaLivro) //aplicação aceita receber body.json -> usar o post

const port = 8000

app.listen(port, () =>{
    console.log(`escutando a porta ${port}`)
})