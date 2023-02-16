import BookShow from "./BookShow";
//refactor hooks
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  //refactor hooks
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
