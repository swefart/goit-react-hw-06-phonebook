import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const contactsSlise = createSlice({
    name: 'contacts',
    initialState: initialState.phonebook,
    reducers: {
        addContact: (state, action) => ({
            ...state,
            contacts: [...state.contacts, {id: nanoid(), ...action.payload}]
        }),
        deleteContact: (state, action) => ({
            ...state,
            contacts: [...state.contacts.filter(({name}) => name !== action.payload)]
        }),
        filterContact: (state, action) => ({
            ...state,
            filter: action.payload,
        })
    }
})

export const { addContact, deleteContact, filterContact } = contactsSlise.actions;

export const contactsReducer = contactsSlise.reducer;