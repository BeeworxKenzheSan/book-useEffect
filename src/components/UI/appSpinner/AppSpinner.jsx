import styled, { keyframes } from "styled-components";

export const AppSpinner = () => {
	return (
		<Atasi>
			<Balasy />
		</Atasi>
	);
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Atasi = styled.div`
	width: 50px;
	height: 50px;
	border: 4px solid blue;
	border-radius: 50%;
	border-top-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${rotate} 1s linear infinite;
`;

const Balasy = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 4px solid yellow;
	border-bottom-color: transparent;
	animation: ${rotate} 0.5s linear infinite reverse;
`;
