import { TOGGLE_SNACKBAR } from './types';

export default function (bool, message) {
    return {
        type: TOGGLE_SNACKBAR, 
        payload: {
            bool,
            message
        }
    };
};
