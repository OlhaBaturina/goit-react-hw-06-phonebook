import types from './contact-types';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

const addContact = text => ({
    type: types.ADD,
    payload: {
        id: id,
        text,
        completed: false,
    },
});

const deleteContact = id => ({
    type: types.DELETE,
    payload: {
        id,
    },
});

const filterContact = id => ({
    type: types.FILTER,
    payload: {
        id,
    },
});

export default {
    addContact,
    filterContact,
    deleteContact,
};
