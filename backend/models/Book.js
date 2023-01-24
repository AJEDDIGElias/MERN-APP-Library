const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    ratings: {
        type: String,
        required: true,
    },
    averageRating: {
        type: String,
    }
});


const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
