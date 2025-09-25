
import React, { useState, useEffect } from 'react';
import { booksData, categories, getBooksByCategory, searchBooks } from '../data/booksData';
import BookCard from '../components/BookCard';
import '../pages/BookListPage.css'; 

const BookListPage = () => {
 
  const [displayedBooks, setDisplayedBooks] = useState(booksData);
 
  const [searchTerm, setSearchTerm] = useState('');
 
  const [selectedCategory, setSelectedCategory] = useState('all');

  
  useEffect(() => {
    let filteredBooks = booksData;

  
    if (selectedCategory !== 'all') {
      filteredBooks = getBooksByCategory(selectedCategory);
    }

  
    if (searchTerm) {
      const searchQuery = searchTerm.toLowerCase();
      filteredBooks = filteredBooks.filter(book =>
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery)
      );
    }
    
    setDisplayedBooks(filteredBooks);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="book-list-page">
      <h1>รายการหนังสือทั้งหมด</h1>

      {/* ส่วนของ Filter และ Search */}
      <div className="filters">
        <input
          type="text"
          placeholder="ค้นหาจากชื่อหนังสือ, ผู้แต่ง..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">ทุกหมวดหมู่</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* ส่วนแสดงผลรายการหนังสือ */}
      <div className="book-grid">
        {displayedBooks.length > 0 ? (
          displayedBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>ไม่พบหนังสือที่ตรงกับเงื่อนไข</p>
        )}
      </div>
    </div>
  );
};

export default BookListPage;