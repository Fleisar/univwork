import React from 'react';
import styled from "styled-components";

type BoxProps = {
	onClick: React.MouseEventHandler
	children: React.ReactNode
	sx?: string
}

const BoxContainer = styled.div<BoxProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 128px;
  background: #D9D9D9;
  box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.5),
  0 4px 4px rgba(0, 0, 0, 0.25),
  inset 4px 4px 4px rgba(255, 255, 255, 0.5),
  inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
  font-size: 96px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: -4px -4px 4px rgba(255, 255, 255, 0.5),
    0px 4px 4px rgba(0, 0, 0, 0.25),
      inset -4px -4px 4px rgba(255, 255, 255, 0.5),
    inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
  ${(props) => props.sx}
`;

const Box: React.FC<BoxProps> = ({ children, onClick, sx }) => (
	<BoxContainer onClick={ onClick } sx={sx}>
		{ children }
	</BoxContainer>
);

export default Box;
