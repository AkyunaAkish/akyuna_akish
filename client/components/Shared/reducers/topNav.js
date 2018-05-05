import { TOGGLE_SNACKBAR } from '../actions/types';

let initialState = {
    snackBarOpen: false,
    snackBarMessage: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SNACKBAR:
            
            return { 
                ...state, 
                snackBarMessage: action.payload.message, 
                snackBarOpen: action.payload.bool
            };

        default:
            return state;
    }
}