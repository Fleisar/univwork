import React from 'react';
import styled from "styled-components";

type ModalProps = {
	children: React.ReactNode
	actions: React.ReactNode
	sx?: string
}

const ModalBackground = styled.div`
  	position: fixed;
  	top: 0;
	width: 100%;
  	height: 100%;
  	background: rgba(0, 0, 0, 0.3);
  	backdrop-filter: blur(8px);
  	display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContainer = styled.div<Pick<ModalProps, 'sx'>>`
	width: 920px;
    height: 520px;
    padding: 48px 32px;
  	background: #fff;
	display: flex;
	flex-direction: column;
  	${(props) => props.sx}
`

const ModalContent = styled.div`
	display: flex;
  	gap: 32px;
`

const Modal: React.FC<ModalProps> = ({ sx, children, actions }) => (
	<ModalBackground>
		<ModalContainer sx={sx}>
			<ModalContent style={{ flex: 1, gap: 16, flexDirection: 'column' }}>
				{children}
			</ModalContent>
			<ModalContent style={{ justifyContent: 'flex-end' }}>
				{actions}
			</ModalContent>
		</ModalContainer>
	</ModalBackground>
);

export default Modal;
