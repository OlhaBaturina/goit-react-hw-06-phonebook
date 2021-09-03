import { createStore } from 'redux';

const state = {
    contacts: {
        items: [],
        filter: '',
    },
};

const reducer = (state = {}, action) => state;

const store = createStore(reducer);
