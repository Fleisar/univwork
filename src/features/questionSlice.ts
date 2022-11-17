import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import questions from "../shared/lib/questions";

const questionSlice = createSlice({
	name: 'question',
	initialState: questions,
	reducers: {
		resetQuestions: () => {
			return questions;
		},
		solveQuestion: (state, { payload }: PayloadAction<string>) => {
			return state.map((question) => question.id === payload ? { ...question, solved: true } : question);
		}
	},
});

export const { resetQuestions, solveQuestion } = questionSlice.actions;

export default questionSlice.reducer;
