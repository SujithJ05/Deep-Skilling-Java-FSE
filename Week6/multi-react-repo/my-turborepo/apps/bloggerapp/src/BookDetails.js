import React from "react";

function BookDetails() {
  const books = [
    { id: 1, title: "Mountain Trails", author: "Arun" },
    { id: 2, title: "Sea Breeze", author: "Meera" },
    { id: 3, title: "Desert Sun", author: "Kiran" },
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
