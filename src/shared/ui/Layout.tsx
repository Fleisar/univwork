import React from "react";
import styled from "styled-components";

type LayoutProps = {
	children: React.ReactNode
	sx?: string
}

const LayoutContent = styled.div`
	width: 1440px;
  	height: 1080px;
  	border: 5px dashed rgba(0, 0, 0, 0.2);
`

const LayoutWrapper = styled.div<LayoutProps>`
  	display: flex;
  	height: 100%;
  	align-items: center;
  	justify-content: center;
	${ (props) => props.sx }
`

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<LayoutWrapper>
		<LayoutContent>
			{ children }
		</LayoutContent>
	</LayoutWrapper>
);

export default Layout;
