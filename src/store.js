import { configureStore } from '@reduxjs/toolkit';
import petReducer from './features/pet/petSlice';

export default configureStore({
    reducer: {
        pet: petReducer,
    },
});