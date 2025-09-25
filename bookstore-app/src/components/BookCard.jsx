// src/components/BookCard.js
import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className={`book-card ${!book.inStock ? 'out-of-stock' : ''}`}>
      <div className="book-image-container">
        <img src={book.image} alt={book.title} className="book-image" />
        {!book.inStock && <div className="stock-overlay">สินค้าหมด</div>}
      </div>
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <div className="book-price">
          <span className="current-price">{book.price.toLocaleString()} บาท</span>
          {book.originalPrice && <span className="original-price">{book.originalPrice.toLocaleString()} บาท</span>}
        </div>
        <button disabled={!book.inStock}>
          {book.inStock ? 'หยิบใส่ตะกร้า' : 'สินค้าหมด'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;