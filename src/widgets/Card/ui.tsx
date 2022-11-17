import Button from "../../entities/Button";
import Modal from "../../entities/Modal";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlockWithBackdrop from "../../shared/ui/BlockWithBackdrop";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks";
import { setFirstPoint, setMiddlePoint, setSecondPoint } from "../../features/counterSlice";
import { solveQuestion } from "../../features/questionSlice";

type Props = {
	entity: Question
	open: boolean
	setOpen: (s: boolean) => any
}

const MarkContainer = styled.div`
	margin: 0 -32px;
  	display: flex;
  	& > * {
      flex: 1;
      &:nth-child(2n + 1) > * {
        background: #D9D9D9;
        &>div {
          color: #9C9C9C;
        }
      }
    }
`;

const answerStyle = `
	font-size: 64px;
	height: 82px;
	background: #9C9C9C;
	color: #000;
	overflow: hidden;
	cursor: pointer;
	&:hover {
		box-shadow: 0 0 2px 0 #000;
	}
`;

const answerBackdropStyle = `
	z-index: unset;
	opacity: 0.5;
	color: #D9D9D9;
`;

const UI: React.FC<Props> = ({ open, setOpen, entity }) => {
	const [answerShow, setAnswerShow] = useState(false);
	const dispatch = useAppDispatch();
	const {
		first,
		second,
		middle,
	} = useAppSelector((state) => state.counter);

	useEffect(() => {
		setAnswerShow(false);
	}, [entity]);

	const handleDone = () => {
		dispatch(solveQuestion(entity.id));
		setOpen(false);
	}

	return open ? (
		<Modal actions={!answerShow ? [
			<Button key='close' onClick={() => setOpen(false)}>Пропустить</Button>,
			<Button key='answer' onClick={() => setAnswerShow(true)}>Ответ</Button>
		] : []}>
			{answerShow ? (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						height: '100%',
					}}
				>
					<span>{entity.name}</span>
					<span style={{ fontSize: 24, textAlign: 'center' }}>{entity.description}</span>
					<MarkContainer>
						<div onClick={() => {
							dispatch(setFirstPoint(first.points + 1));
							handleDone();
						}}>
							<BlockWithBackdrop sx={answerStyle} backdropSx={answerBackdropStyle} backdrop={<span style={{ fontSize: 128 }}>{first.points}</span>}>
								{first.name}
							</BlockWithBackdrop>
						</div>
						<div onClick={() => {
							dispatch(setMiddlePoint(middle.points + 1));
							handleDone();
						}}>
							<BlockWithBackdrop sx={answerStyle} backdropSx={answerBackdropStyle} backdrop={<span style={{ fontSize: 128 }}>{middle.points}</span>}>
								{middle.name}
							</BlockWithBackdrop>
						</div>
						<div onClick={() => {
							dispatch(setSecondPoint(second.points + 1));
							handleDone();
						}}>
							<BlockWithBackdrop sx={answerStyle} backdropSx={answerBackdropStyle} backdrop={<span style={{ fontSize: 128 }}>{second.points}</span>}>
								{second.name}
							</BlockWithBackdrop>
						</div>
					</MarkContainer>
				</div>
			) : (
				<>
					<span>{entity.name}</span>
					<span style={{ fontSize: 24 }}>{entity.description}</span>
				</>
			)}
		</Modal>
	) : null;
}

export default UI;
