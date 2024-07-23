import React from "react";
import styled from "styled-components";

export const Wrapper = ({ children }) => {
	return <WrapperStyled>{children}</WrapperStyled>;
};

const WrapperStyled = styled.div`
	padding: 20px;
	margin: 20px;
	background-color: #f2f2f2;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
