import styled, { keyframes } from "styled-components";

const Spinner = () => {
	return (
		<SpinnerContainer>
			<SpinnerBall />
			<SpinnerBall />
			<SpinnerBall />
		</SpinnerContainer>
	);
};

export default Spinner;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: red;
`;

const SpinnerBall = styled.div`
	width: 10px;
	height: 10px;
	background-color: #f3ecec;
	border-radius: 50%;
	margin: 0 5px;
	animation: ${bounce} 0.6s infinite ease-in-out;

	&:nth-child(1) {
		animation-delay: 3s;
	}

	&:nth-child(2) {
		animation-delay: 2s;
	}
`;
