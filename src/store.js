import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

/* Version #1
const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    return {
        type: ADD,
        text,
    }
}
const deleteToDo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id)
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type:
            return [{ text: action.text, id: Date.now() }, ...state];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type:
            return [{ text: action.payload, id: Date.now() }, ...state];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
}
*/

/* Version #2
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE")

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });  //mutate state with {} = no return
    },
    [deleteToDo]: (state, action) => 
        state.filter(toDo => toDo.id !== action.payload)  //return state without {} <= no mutate, choose return or mutate
    ,
})
*/

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });  //mutate state with {} = no return
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

/* Ver #1 & #2
export const actionCreators = {
    addToDo,
    deleteToDo,
}
*/

export default store;