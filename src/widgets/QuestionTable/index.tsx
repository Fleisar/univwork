import styled from "styled-components";
import { useAppSelector } from "../../shared/lib/hooks";
import Box from "../../entities/Box";
import React from "react";

const Container = styled.div`
  width: 1248px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 32px;
  margin: auto;
`;

type QuestionTableProps = {
	onClick: (e: React.MouseEvent<Element>, q: Question) => any
}

const QuestionTable: React.FC<QuestionTableProps> = ({ onClick }) => {
	const {
		question: questions,
	} = useAppSelector((state) => state);

	return (
		<Container>
			{questions.map((question, index) =>
				<Box
					key={ question.id }
					onClick={(e) => onClick(e, question)}
					sx={`
						opacity: ${question.solved ? 0 : 1};
						pointer-events: ${question.solved ? 'none' : 'all'};
					`}
				>
					{ index + 1 }
				</Box>
			)}
		</Container>
	);
};

export default QuestionTable;
