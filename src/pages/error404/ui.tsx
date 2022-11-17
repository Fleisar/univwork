import BlockWithBackdrop from "../../shared/ui/BlockWithBackdrop";
import Layout from "../../shared/ui/Layout";
import { NavLink } from "react-router-dom";

const UI = () => (
	<Layout>
		<BlockWithBackdrop
			backdrop={ <span style={ { fontSize: 256, opacity: 0.1 } }>404</span> }
			sx={ `
				height: 100%;
				font-size: 64px;
				text-align: center;
			` }
		>
			<span>
				Такой страницы
				<br/>
				не существует
			</span>
			<NavLink
				to={ '/' }
				style={ {
					position: 'absolute',
					fontSize: 32,
					top: 'calc(50% + 162px)',
				} }
			>
				&lt; на главную
			</NavLink>
		</BlockWithBackdrop>
	</Layout>
);

export default UI;
