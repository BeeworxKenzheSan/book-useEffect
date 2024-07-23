import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

export const FormInput = forwardRef(
  (
    { placeholder, id, value, error, labelText, type = "text", ...rest },
    ref
  ) => {
    const placeholderX =
      placeholder !== "" && placeholder ? placeholder : "...";

    return (
      <FormLabel>
        <Label htmlFor={id}>{labelText}</Label>
        <Input
          ref={ref}
          placeholder={placeholderX}
          id={id}
          value={value}
          type={type}
          error={error}
          {...rest}
        />
      </FormLabel>
    );
  }
);

const FormLabel = styled.div`
  color: #000000;
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border: 1px solid black;
  }
`;
