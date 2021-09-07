import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contact-actions';

const contactsReducer = createReducer([], {
    [actions.getSubmitData]: (state, action) => {
        if (
            state.find(
                state =>
                    state.name.toLowerCase() ===
                    action.payload.name.toLowerCase(),
            )
        ) {
            toast.error('Hey, this name always here!');
            return [...state];
        }
        return [...state, action.payload];
    },

    [actions.handleDelete]: (state, action) => {
        return state.filter(state => state.id !== action.payload);
    },
});

const filterReducer = createReducer('', {
    [actions.changeFilterValue]: (_, action) => {
        return action.payload;
    },
});

export default { contactsReducer, filterReducer };
