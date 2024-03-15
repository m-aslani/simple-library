import { useState } from "react";

import { books as booksData } from "../constants/mockData";
import BookCard from "./BookCard";
import LikedBooks from "./LikedBooks";

import styles from "./Books.module.css";
import SearchBox from "./SearchBox";

function Books() {
  const [books, setBooks] = useState(booksData);
  const [liked, setLiked] = useState([]);
  const [searched, setSearched] = useState([]);


  const likedListHandler = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const searchedHandler = ()=>{
    if(searched) {
      const newBooksList = booksData.filter((book)=>(book.title.toLowerCase().includes(searched)));
      setBooks(newBooksList)
    }else{
      setBooks(booksData);
    }
  }

  return (
    <>
    <SearchBox searched = {searched}  setSearched = {setSearched} searchedHandler={searchedHandler}/>
    <div className={styles.container}>
      <div className={styles.cards}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            likedListHandler={likedListHandler}
          />
        ))}
      </div>
      {!!liked.length && (
        <div className={styles.liked}>
            <h4>BookMarks</h4>
          {liked.map((book) => (
            <LikedBooks key={book.id} data={book} />
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default Books;
