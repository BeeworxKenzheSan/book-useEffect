import React, { useState, useRef } from "react";
import { Button } from "../UI/Button";
import { FormInput } from "../UI/FormInput";
import { Title } from "../UI/title/Title";
import styled from "styled-components";

// useRef - хук
// useRef - получает прямую ссылку на dom element
// useRef - работает через дом

export const BookForm = ({
  onCancel,
  onAddBook,
  onAddRandomBook,
  onAddBookByApi,
}) => {
  //   const [title, setTitle] = useState("");
  //   const [author, setAuthor] = useState("");
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const [isError, setIsError] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      authorRef.current.value.length < 3 ||
      titleRef.current.value.length < 3
    ) {
      setIsError(true);
      return;
    }

    setIsError(false);
    const newBook = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      isFavorite: false,
      id: Math.floor(Math.random() * 1000),
      source: "Manually",
    };
    onAddBook(newBook);
    titleRef.current.value = "";
    authorRef.current.value = "";
  };

  const addBookByApi = () => {
    if (
      authorRef.current.value.length < 3 ||
      titleRef.current.value.length < 3
    ) {
      setIsError(true);
      return;
    }

    setIsError(false);
    const newBook = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      isFavorite: false,
      source: "Api",
    };
    onAddBookByApi(newBook);
    titleRef.current.value = "";
    authorRef.current.value = "";
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmitHandler}>
        <Title>Add a New Book</Title>
        <FormInput ref={titleRef} id="f1" labelText="Title" error={isError} />
        <FormInput ref={authorRef} id="f2" labelText="Author" error={isError} />
        <ButtonContainer>
          {/* <Button type="submit">Add Book</Button>
          <Button type="button" onClick={onAddRandomBook}>
            Add Random
          </Button> */}
          <Button type="button" onClick={addBookByApi}>
            Add Random via API
          </Button>
          <Button type="button" onClick={onCancel} variant="outlined">
            Cancel
          </Button>
        </ButtonContainer>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
