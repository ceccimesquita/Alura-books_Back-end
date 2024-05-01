const { Router } = require('express')
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require('../controladores/livro')

const router = Router()

router.get('/', (getLivros)) //pegar todos os livros

router.get('/:id', (getLivro)) //pegar 1 livros

router.post('/', (postLivro)) //inserir


router.patch('/:id', (patchLivro)) //editar


router.delete('/:id', (deleteLivro)) //deletar


module.exports = router