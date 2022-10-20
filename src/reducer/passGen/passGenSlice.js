import { createSlice } from '@reduxjs/toolkit';
import { generatePass } from '../../app/pass';

const ini = () => {
	const valor = localStorage.getItem('values_passGen');
	if (valor) {
		return JSON.parse(valor);
	}
	return {
		password: '',
		range: 20,
		checked: {
			lower: true,
			upper: true,
			number: false,
			special: false,
		},
	};
};

export const passGenSlice = createSlice({
	name: 'genSlice',
	initialState: ini(),
	reducers: {
		UPD_RANGE: (state, actions) => {
			state.range = actions.payload;
		},
		UPD_CHECKED: (state, actions) => {
			let newChecked = state.checked;
			for (const key in newChecked) {
				if (key == actions.payload) {
					newChecked[actions.payload] = !newChecked[actions.payload];
				}
			}
			state.checked = newChecked;
		},
		P_GENERATE: (state) => {
			state.password = generatePass(state.range, state.checked);
		},
	},
});

export const { UPD_RANGE, UPD_CHECKED, P_GENERATE } = passGenSlice.actions;
export default passGenSlice.reducer;
