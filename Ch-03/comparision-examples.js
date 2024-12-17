// examples/comparison-examples.js

// Traditional Redux Store Setup
import { createStore } from 'redux';
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(logger)
);

// RTK Store Setup
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: rootReducer
});

// Traditional Redux Reducer
function usersReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.user];
        case 'REMOVE_USER':
            return state.filter(user => user.id !== action.id);
        default:
            return state;
    }
}

// RTK Slice
const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            return state.filter(user => user.id !== action.payload);
        }
    }
});

// Traditional Redux Selector
selector(state) {
    return state.users;
}

// RTK Generated Selector
export const selectAllUsers = state => state.users;

// Traditional Redux Action Dispatch
dispatch({ type: 'ADD_USER', user });

// RTK Action Dispatch
dispatch(userSlice.actions.addUser(user));

// Test Store Setup with RTK
const testStore = configureStore({
    reducer: {
        users: [{ id: 1 }],
        posts: [{ id: 1 }]
    }
});