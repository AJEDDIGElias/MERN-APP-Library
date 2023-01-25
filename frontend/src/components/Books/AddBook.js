import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBookAction } from '../../redux/actions/books/bookActions';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [ratings, setRating] = useState('');

  //dispatch
  const dispatch = useDispatch();

  //Handle form submit

  const handleFormSubmit = e => {
    e.preventDefault();

    const data = {
      title,
      author,
      imageUrl,
      year,
      genre,
      ratings
    };
    dispatch(createBookAction(data));
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
      <h2 class="text-center">Add a Book !</h2>
        <div className='container'></div>
          <form onSubmit={handleFormSubmit}>
            <fieldset>
                <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Title </label>
                    <input
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      type='text'
                      className='form-control'
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
                      placeholder='Book author'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Year </label>
                    <input
                      value={year}
                      onChange={e => setYear(e.target.value)}
                      type='text'
                      className='form-control'
                      placeholder='Year of creation'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Genre</label>
                    <input
                      value={genre}
                      onChange={e => setGenre(e.target.value)}
                      type='text'
                      className='form-control'
                      placeholder='Book genre'
                    />
                </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Rating</label>
              <input
                    value={ratings}
                    onChange={e => setRating(e.target.value)}
                    type='number'
                    className='form-control'
                    placeholder='Rating between 1 and 5'
                    min="1" 
                    max="5"
                  />
            </div>
            <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Image Url</label>
                    <input
                      value={imageUrl}
                      onChange={e => setImageUrl(e.target.value)}
                      type='text'
                      className='form-control'
                      placeholder="Book cover Url "
                    />
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">ADD BOOK</button>
            </fieldset>
          </form>
        </div>
      </div>
  );
};

export default AddBook;
