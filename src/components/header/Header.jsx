import styled from "styled-components";

export const Header = () => {
	return (
		<AppHeader>
			<h1>Book Library App</h1>
		</AppHeader>
	);
};

const AppHeader = styled.header`
	background-color: #0a1a2d;
	color: #fff;
	width: 100%;
	margin-bottom: 20px;
	padding: 20px 0;
`;
