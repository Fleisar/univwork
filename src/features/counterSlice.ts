import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterType = {
	[x in 'first' | 'second' | 'middle']: {
		name?: string
		points: number
		history: Question[]
	}
}

const initialState: CounterType = {
	first: {
		name: 'листики',
		points: 0,
		history: [],
	},
	second: {
		name: 'фантики',
		points: 0,
		history: [],
	},
	middle: {
		name: 'ничья',
		points: 0,
		history: [],
	}
}

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setFirstPoint: (state, { payload }: PayloadAction<number>) => {
			Object.assign(state.first, {
				points: payload
			});
		},
		setSecondPoint: (state, { payload }: PayloadAction<number>) => {
			Object.assign(state.second, {
				points: payload
			});
		},
		setMiddlePoint: (state, { payload }: PayloadAction<number>) => {
			Object.assign(state.middle, {
				points: payload
			});
		},
		reset: (state) => {
			Object.assign(state, initialState);
		},
	}
})

export const { setMiddlePoint, setSecondPoint, setFirstPoint, reset } = counterSlice.actions;

export default counterSlice.reducer;
