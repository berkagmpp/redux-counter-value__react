import { createSlice, configureStore } from '@reduxjs/toolkit';

const initailState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initailState,
    reducers: {
        increment(state) {
            state.counter++;    // in Redux tookit, can manipulate state (because toolkit internally translate into immutable code)
        },                      // it looks mutable state, but which isn't mutating the state
        increse(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;     // in Redux tookit, just write state that changed!
        }
    }
});

// const counterReducer = (state = initailState, action) => {
//     if (action.type === 'increment') { 
//         return {    // in Redux, should return (return is override, obj is easily override) a brand new obj
//             counter: state.counter + 1,     // never change existing state (ex: state.counter++)
//             showCounter: state.showCounter  // should return all state! (if didn't, showCounter would be undefined -> considered as false -> counter will be disappeared)
//         };
//     }

//     if (action.type === 'increse') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter  - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     }

//     return state;
// };

// const store = configureStore({
//    reducer: counterReducer
// });

const store = configureStore({
    reducer: { counter: counterSlice.reducer }   // merge all reducers for making a global main reducer 
});

export const counterActions = counterSlice.actions;     //should export actions too!
export default store;