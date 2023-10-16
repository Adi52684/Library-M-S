import React from 'react'

const AddBook = () => {
  return (
    <div>
    <h2>Add Book</h2>

    <div>
        <label For="bookid">Book ID</label>
        <input type="text"  id='bookid' name='bookid' />
    </div>

    <div>
        <label For="genre">Genres</label>
        <select name="genere" id="gn">
        <option id=''>Select</option>
        <option id='fi'>Fiction</option>
        <option id='bi'>Biography</option>
        <option id='fa'>Fantasy</option>
        <option id='ro'>Romance</option>
        <option id='my'>Mythology</option>
        <option id='hi'>History</option>
        <option id='th'>Thriller</option>
        <option id='po'>Politics</option>
        <option id='po'>Poetry</option>
        </select>
    </div>
    <div>
        <label For="author">Author</label>
        <input type="text"   name='author' />

    </div>
    <div>
        <label For="bookname">Book Name</label>
        <input type="text"   name='bookname' />
    </div>
    <button type="submit">Register</button>
    
    </div>
  )
}

export default AddBook