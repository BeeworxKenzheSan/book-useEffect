import { useState } from "react";
import { BookForm } from "./components/bookForm/BookForm";
import { Header } from "./components/header/Header";
import { Button } from "./components/UI/Button";
import { BookList } from "./components/bookList/BookList";
import { Modal } from "./components/UI/Modal";
import bookData from "./data/books.json";
import { Filter } from "./components/filter/Filter";
import styled from "styled-components";

function App() {
  const [open, setOpen] = useState(false);
  const [books, setBooks] = useState([]);

  function openAddBookForm() {
    setOpen((prev) => {
      return !prev;
    });
  }

  const buttonText = !open ? "Add Book" : "Cancel";

  function onAddNewBook(parametr) {
    setBooks((prev) => {
      return [...prev, parametr];
    });
    openAddBookForm();
  }

  const toggleFavorite = (id) => {
    const updateBooks = books.map((item) =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setBooks(updateBooks);
  };

  const deleteHandler = (id) => {
    const updateDeleteBooks = books.filter((item) => item.id !== id);
    setBooks(updateDeleteBooks);
  };

  const addRandomBook = () => {
    const randomBook = Math.floor(Math.random() * bookData.length);
    const newBook = {
      ...bookData[randomBook],
      isFavorite: false,
      id: Math.floor(Math.random() * 1000),
      source: "Random",
    };
    setBooks((prev) => {
      return [...prev, newBook];
    });
    openAddBookForm();
  };

  const addBookViaApi = async (book) => {
    try {
      const response = await fetch("https://1ca3efa473676ad2.mokky.dev/books", {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <AppContainer>
      <Header />
      <Button onClick={openAddBookForm}>{buttonText}</Button>
      <AppMainWrapper className="app-main">
        <AppLeftColumn>
          <Modal open={open} onClose={openAddBookForm}>
            <BookForm
              onCancel={openAddBookForm}
              onAddBook={onAddNewBook}
              onAddRandomBook={addRandomBook}
            />
          </Modal>
        </AppLeftColumn>
        <AppRightColumn className="app-right-column">
          <Filter />
          <BookList
            books={books}
            onDelete={deleteHandler}
            onToggle={toggleFavorite}
          />
        </AppRightColumn>
      </AppMainWrapper>
    </AppContainer>
  );
}

export default App;

const AppRightColumn = styled.div`
  flex: 1;
  flex-basis: 65%;
  display: flex;
  flex-direction: column;
`;

const AppLeftColumn = styled.div``;
const AppMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
