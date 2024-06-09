import React from "react";

import { Link, useParams } from "react-router-dom";
import booksData from "../assets/book.json";

// Importing images statically
import Book1 from "../assets/Liabary-Image/richdad.jpg";
import Book2 from "../assets/Liabary-Image/think.jpg";
import Book3 from "../assets/Liabary-Image/atomic.jpg";
import Book4 from "../assets/Liabary-Image/pride.jpg";
import Book5 from "../assets/Liabary-Image/great.jpg";
import Book6 from "../assets/Liabary-Image/toKill.jpg";
import Book7 from "../assets/Liabary-Image/1984.png";
import Book8 from "../assets/Liabary-Image/catcher.jpg";

const imageMap = {
  "richdad.jpg": Book1,
  "think.jpg": Book2,
  "atomic.jpg": Book3,
  "pride.jpg": Book4,
  "great.jpg": Book5,
  "toKill.jpg": Book6,
  "1984.png": Book7,
  "catcher.jpg": Book8,
};

const BookDetails = () => {
  const { id } = useParams();
  const book = booksData.find((book) => book.id === parseInt(id));

  if (!book) return <div>Book not found!</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="text-3xl font-bold text-center mt-6 mb-8 text-gray-800">
          {book.title} Details
        </h2>
        <div className="flex bg-white border rounded-sm shadow-lg p-3">
          <div>
            <img
              src={imageMap[book.image]}
              alt={book.title}
              className="w-1/2 h-full md:ml-20 mb-4 rounded-sm"
            />
          </div>

          <div className=" w-1/2">
            <span className="mb-4 text-xl font-semibold">Author: </span>
            <span className="text-gray-700 mb-4 text-md text-justify">
              {book.author}
            </span>
            <br />

            <span className="mb-4 text-xl font-semibold">Genre: </span>
            <span className="text-gray-700 mb-4 text-lg text-justify">
              {book.genre}
            </span>
            <br />
            <span className="mb-4 text-xl font-semibold">Published Year: </span>
            <span className="text-gray-700 mb-4 text-lg text-justify">
              {book.publishedYear}
            </span>
            <br />
            <p className="mb-4 text-xl font-semibold">Summary:</p>
            <p className="text-gray-700 mb-4 text-lg text-justify">
              {book.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
