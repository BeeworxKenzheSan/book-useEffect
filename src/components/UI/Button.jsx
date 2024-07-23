import React from "react";
import styled, { css } from "styled-components";
import Spinner from "./spinner/Spinner";

export const Button = ({ isLoading, children, onClick, variant }) => {
	const content = isLoading ? <Spinner /> : children;
	const isOutlined = variant === "outlined";

	return (
		<ButtonStyled onClick={onClick} outlined={isOutlined}>
			{content}
		</ButtonStyled>
	);
};

const ButtonStyled = styled.button`
	background-color: #007bff;
	color: #fff;
	padding: 8px 12px;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	margin: 10px;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #0056b3;
	}

	${(props) =>
		props.outlined &&
		css`
			background: none;
			color: red;
			border: 1px solid red;

			&:hover {
				background: red;
				color: white;
			}
		`}
`;
