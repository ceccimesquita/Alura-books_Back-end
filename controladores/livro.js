//saber quando tem q retornar e o que retornar 
const { getTodosLivros} = require("../servicos/livros")
const { getLivroById } = require("../servicos/livros")
const {insereLivro} = require("../servicos/livros")
const {modificaLivro} = require("../servicos/livros")
const {deletaLivrobyId} = require("../servicos/livros")



function getLivros(req, res){ 
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res){ 
    try {
        const id = req.params.id

        if(id && Number(id)){
            const livro = getLivroById(id)
            res.send(livro)
        }else{
            res.status(422)
            res.send("Id invalido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res){
    try {
        const livroNovo = req.body
        if(req.body.nome){
            insereLivro(livroNovo)
            res.status(201) //status como criado com sucesso -> inserido um valor novo no banco de dados
            res.send("Livro inserido com sucesso")
        }else{
            res.status(422)
            res.send("O campo nome é obrigatório")
        }

        
    } catch (error) {
       res.status(500)
       res.send(error.message) 
    }
}

function patchLivro(req, res){
    try {
        const id = req.params.id
        const body = req.body
        if(id && Number(id)){
            modificaLivro(body, id)
            res.send("livro modificado com sucesso")
        }else{
            res.status(422)
            res.send("Id invalido")
        }        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            deletaLivrobyId(id)
            res.send(`Livro  com id ${id} deletado com sucesso`)
        }else{
            res.status(422)
            res.send("Id invalido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro, 
    postLivro, 
    patchLivro,
    deleteLivro
}   