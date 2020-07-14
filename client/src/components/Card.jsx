import styled from "styled-components";

export const Card = styled.div.attrs({
	className: "mx-auto",
})`
	width: 100%;
	height: ${(props) => props.height || "500px"};
	padding-left: 20px;
	padding-right: 20px;

	background: #fafafa;
	border: 1px solid rgba(0, 0, 0, 0.08);
	box-sizing: border-box;
	border-radius: 20px;
	margin-bottom: 2rem;
`;

export const CardHeader = styled.p.attrs({
	className: "text-center font-semibold text-2xl mt-20",
})``;
