import express from 'express'
import * as BookController from '../Controllers/BookController.js'

const router = express.Router()

router.get('/', BookController.fetchAllBooks);

router.post('/', BookController.postBook)

router.get('/:id', BookController.getSingleBook)

router.patch('/:id', BookController.updateBook)

router.delete('/:id', BookController.deleteBook)

export default router