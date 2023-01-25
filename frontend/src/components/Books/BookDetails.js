import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, updateBook } from '../../redux/actions/books/bookActions';

const BookDetail = ({ history }) => {
  const { id } = useParams();

  //Get the book details and fill it in the form
  const bookDetails = useSelector(state => state.bookDetails);

  const { book, loading } = bookDetails;

  const [title, setTitle] = useState(book && !loading && book.title);
  const [author, setAuthor] = useState(book && !loading && book.author);
  const [imageUrl, setImageUrl] = useState(book && !loading && book.imageUrl);
  const [year, setYear] = useState(book && !loading && book.year);
  const [genre, setGenre] = useState(book && !loading && book.genre);
  const [ratings, setRating] = useState(book && !loading && book.ratings);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  //dispatch action

  const formSubmitHandler = e => {
    const data = {
        title,
        author,
        imageUrl,
        year,
        genre,
        ratings
    };
    e.preventDefault();
    dispatch(updateBook(id, data));
    history.push('/books');
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {book ? (
            <>
              <h1 className='text-center'>Update Book</h1>
                  <form onSubmit={handleFormSubmit}>
                    <fieldset>
                    <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>Title </label>
                        <input
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='Book title'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>Author </label>
                        <input
                          value={author}
                          onChange={e => setAuthor(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='Author name'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>imageUrl</label>
                        <input
                          value={imageUrl}
                          onChange={e => setImageUrl(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='URL'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Year</label>
                        <input
                          value={year}
                          onChange={e => setYear(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Creation Year'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Genre</label>
                        <input
                          value={genre}
                          onChange={e => setGenre(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Genre of the book'
                        />
                        <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Ratings</label>
                        <input
                          value={ratings}
                          onChange={e => setRating(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Personnal rating'
                        />
                      </div>
                      </div>
                      <button type='submit' className='btn btn-warning m-auto'>
                        Create Book
                      </button>
                    </fieldset>
              </form>
            </>
          ) : (
            'No'
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;