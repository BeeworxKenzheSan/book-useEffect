import { useEffect, useState } from "react";
import { BookForm } from "./components/bookForm/BookForm";
import { Header } from "./components/header/Header";
import { Button } from "./components/UI/Button";
import { BookList } from "./components/bookList/BookList";
import { Modal } from "./components/UI/Modal";
import bookData from "./data/books.json";
import { Filter } from "./components/filter/Filter";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [open, setOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const deleteHandler = async (book) => {
    if (book.source === "Api") {
      try {
        const response = await fetch(
          `https://1ca3efa473676ad2.mokky.dev/books/${book.id}`,
          { method: "DELETE" }
        );
        if (!response.ok) {
          throw new Error("Кийинчерек корунуз!");
        }
        setBooks((prevState) => {
          return prevState.filter((item) => item.id !== book.id);
        });
        toast.success("Очурулду!");
        getBooks();
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      setBooks((prevState) => {
        return prevState.filter((item) => item.id !== book.id);
      });
    }
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
    setIsLoading(true);
    try {
      const response = await fetch("https://1ca3efa473676ad2.mokky.dev/books", {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        const result = await response.json();
        throw new Error(
          JSON.stringify({ code: result.statusCode, error: result.message })
        );
      }
      toast.success("Жаны китеп кошулду!");
      openAddBookForm();
      getBooks();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const getBooks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://1ca3efa473676ad2.mokky.dev/books");
      if (!response.ok) {
        throw new Error("Кийинчерек корунуз!");
      }
      const serverBooks = await response.json();
      setBooks((prevState) => {
        return [...prevState, ...serverBooks];
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <AppContainer>
      <ToastContainer />
      <Header />
      <Button isLoading={isLoading} onClick={openAddBookForm}>
        {buttonText}
      </Button>
      <AppMainWrapper className="app-main">
        <AppLeftColumn>
          <Modal open={open} onClose={openAddBookForm}>
            <BookForm
              onCancel={openAddBookForm}
              onAddBook={onAddNewBook}
              onAddRandomBook={addRandomBook}
              onAddBookByApi={addBookViaApi}
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
