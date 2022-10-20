import { configureStore } from '@reduxjs/toolkit';
import passGenSlice from '../reducer/passGen/passGenSlice';

export default configureStore({
	reducer: {
		passGenSlice: passGenSlice,
	},
});
