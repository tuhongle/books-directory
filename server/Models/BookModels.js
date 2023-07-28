import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: Object,
    thumbnailUrl: String,
    status: String,
    authors: Array,
    categories: Array,
    shortDescription: String,
    longDescription: String,
}, { timestamps: true})

const Book = mongoose.model('Book', bookSchema)

export default Book