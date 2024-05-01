const fs = require("fs")
const { findSourceMap } = require("module")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroById(id){
    const livros = JSON.parse(fs.readFileSync("livros.json")) //livros recebe a lista de livros com id e nome

    const livroFiltrado = livros.filter( livro => livro.id === id )[0] //copara o id recebido com o id dos livros e sempre que essa comparação for true omlivro fica e se for false ele tira da lista 

    return livroFiltrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json")) //livros recebe a lista de livros com id e nome

    const novaListaLivros = [...livros, livroNovo] //adiciona um novo livro a lista de livros

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros)) //escreve novamente no banco com o novo livros

}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json")) //livros recebe a lista de livros com id e nome -- let para poder modificar valores
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id); // recebe o id do livro 

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais)) //escreve novamente no banco com o novo livros
}

function deletaLivrobyId(id){
    let livros = JSON.parse(fs.readFileSync("livros.json")) //livros recebe a lista de livros com id e nome -- let para poder modificar valores
    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
    
}

module.exports = {
    getTodosLivros,
    getLivroById,
    insereLivro,
    modificaLivro,
    deletaLivrobyId
}