import React, { useState } from "react";
import Layout from "../../shared/ui/Layout";
import { useAppSelector } from "../../shared/lib/hooks";
import QuestionTable from "../../widgets/QuestionTable";
import Card from "../../widgets/Card";

const UI: React.FC = () => {
	const { first, second } = useAppSelector((state) => state.counter);
	const [question, setQuestion] = useState(null as Question | null);
	return (
		<>
			<Layout>
				<div style={ {
					margin: 'auto',
					display: 'flex',
					gap: 64,
					justifyContent: 'center',
					padding: 64,
				} }>
					{
						[first, second].map((group, index) => (
							<div
								key={ index }
								style={ {
									display: 'flex',
									flexDirection: index === 0 ? 'row' : 'row-reverse',
									gap: 32,
									alignItems: 'center',
								} }
							>
								<div style={ { fontSize: 48 } }>{ group.name }</div>
								<div style={ { fontSize: 96 } }>{ group.points }</div>
							</div>
						))
					}
				</div>
				<QuestionTable onClick={(e, question) => setQuestion(question)}/>
			</Layout>
			<Card
				open={question !== null}
				setOpen={(s) => {
					if (!s) {
						setQuestion(null);
					}
				}}
				entity={question as unknown as Question}
			/>
		</>
	);
}

export default UI;
