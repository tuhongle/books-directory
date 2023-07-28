import express from 'express'
import Book from '../Models/BookModels.js'

const router = express.Router()

router.get('/', async(req, res) => {
    const result = await Book.find();
    await res.status(200).json(result)
})

router.post('/', async(req, res) => {
    const books = req.body;
    await Book.create(books);
    await res.status(201).redirect('/')
})

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const result = await Book.findById(id)
    await res.status(200).json(result)
})

router.patch('/:id', async(req, res) => {
    const id = req.params.id;
    const updatedBook = req.body;
    await Book.findByIdAndUpdate(id, updatedBook, { new: true});
    await res.status(201).json({ redirect: '/books' })
})

router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    await Book.findByIdAndDelete(id)
    await res.status(200).json({ redirect: '/' })
})

export default router