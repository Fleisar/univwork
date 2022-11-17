import React from "react";
import styled from "styled-components";

type BlockWithBackdropProps = {
	children: React.ReactNode
	backdrop: React.ReactNode
	sx?: string
	backdropSx?: string
}

const BlockContainer = styled.div<Pick<BlockWithBackdropProps, 'sx'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${ (props) => props.sx }
`

const BackdropBlock = styled.div<Pick<BlockWithBackdropProps, 'sx'>>`
  z-index: -1;
  position: absolute;
  pointer-events: none;
  ${ (props) => props.sx }
`

const BlockWithBackdrop: React.FC<BlockWithBackdropProps> = ({ children, backdrop, sx, backdropSx }) => {
	return (
		<BlockContainer sx={ sx }>
			<BackdropBlock sx={ backdropSx }>{ backdrop }</BackdropBlock>
			{ children }
		</BlockContainer>
	)
}

export default BlockWithBackdrop;
