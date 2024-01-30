// create actions here for dispatching to the reducer!
// the below are just examples of a couple of ways to do them.
// feel free to delete them as you make your own relative to what you're doing
// just make sure to import them in the reducer and use them in the switch statement
// and import them in the component and use them in the dispatches

export const SOME_GENERIC_ACTION = 'SOME_GENERIC_ACTION';
export const ANOTHER_GENERIC_ACTION = 'ANOTHER_GENERIC_ACTION';
export const RESET_ALL = 'RESET_ALL';

export const actionTypes = {
    SOME_GENERIC_ACTION_SET: {
        START: 'SOME_GENERIC_ACTION_START',
        SUCCESS: 'SOME_GENERIC_ACTION_SUCCESS',
        ERROR: 'SOME_GENERIC_ACTION_ERROR',
        RESET: 'SOME_GENERIC_ACTION_RESET'
    },
    ANOTHER_GENERIC_ACTION_SET: {
        START: 'ANOTHER_GENERIC_ACTION_START',
        SUCCESS: 'ANOTHER_GENERIC_ACTION_SUCCESS',
        ERROR: 'ANOTHER_GENERIC_ACTION_ERROR',
        RESET: 'ANOTHER_GENERIC_ACTION_RESET'
    },
    A_MORE_SPECIFIC_ACTION_SET: {
        CREATE: 'A_MORE_SPECIFIC_ACTION_CREATE',
        READ: 'A_MORE_SPECIFIC_ACTION_READ',
        UPDATE: 'A_MORE_SPECIFIC_ACTION_UPDATE',
        DELETE: 'A_MORE_SPECIFIC_ACTION_DELETE'
    },
    WHATEVER_YOU_WANT: {
        IT: 'CAN',
        BE: 'ANYTHING',
        YOU: 'WANT',
        JUST: 'MAKE',
        IT: 'CONSISTENT'
    }
};
