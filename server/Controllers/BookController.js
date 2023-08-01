import Book from '../Models/BookModels.js'


export const fetchAllBooks = async(req, res) => {
    const result = await Book.find().limit(50);
    await res.status(200).json(result)
}

export const postBook = async(req, res) => {
    const books = req.body;
    await Book.create(books);
    await res.status(201).redirect('/')
}

export const getSingleBook = async(req, res) => {
    const id = req.params.id;
    const result = await Book.findById(id)
    await res.status(200).json(result)
}

export const updateBook = async(req, res) => {
    const id = req.params.id;
    const updatedBook = req.body;
    await Book.findByIdAndUpdate(id, updatedBook, { new: true});
    await res.status(201).json({ redirect: '/books' })
}

export const deleteBook = async(req, res) => {
    const id = req.params.id;
    await Book.findByIdAndDelete(id)
    await res.status(200).json({ redirect: '/' })
}