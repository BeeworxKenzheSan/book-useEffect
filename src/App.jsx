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
            <BookForm onCancel={openAddBookForm} onAddBookByApi={() => {}} />
          </Modal>
        </AppLeftColumn>
        <AppRightColumn className="app-right-column">
          {/* <Filter /> */}
          <BookList
            books={books}
            // onDelete={deleteHandler}
            // onToggle={toggleFavorite}
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
