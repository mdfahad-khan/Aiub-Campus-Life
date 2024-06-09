import React, { useState } from "react";
import Book1 from "../../assets/Liabary-Image/richdad.jpg";
import Book2 from "../../assets/Liabary-Image/think.jpg";
import Book3 from "../../assets/Liabary-Image/atomic.jpg";
import Book4 from "../../assets/Liabary-Image/pride.jpg";
import Book5 from "../../assets/Liabary-Image/great.jpg";
import Book6 from "../../assets/Liabary-Image/toKill.jpg";
import Book7 from "../../assets/Liabary-Image/1984.png";
import Book8 from "../../assets/Liabary-Image/catcher.jpg";

// Sample data for books
const booksData = [
  {
    id: 1,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    image: Book1,
  },
  {
    id: 2,
    title: "Think And Grow Rich",
    author: "Napoleon Hill",
    image: Book2,
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    image: Book3,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: Book4,
  },
  {
    id: 5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: Book5,
  },
  {
    id: 6,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: Book6,
  },
  {
    id: 7,
    title: "1984",
    author: "George Orwell",
    image: Book7,
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: Book8,
  },
];

const LibraryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(booksData);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterBooks(event.target.value);
  };

  // Function to filter books based on search term
  const filterBooks = (term) => {
    if (term.trim() === "") {
      setSearchResults(booksData);
    } else {
      const filteredBooks = booksData.filter(
        (book) =>
          book.title.toLowerCase().includes(term.toLowerCase()) ||
          book.author.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredBooks);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Library
        </h2>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search books by title or author"
            className="w-full border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2">by {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
