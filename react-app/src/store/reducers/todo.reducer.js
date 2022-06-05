import { todoConstants as C } from "../constants";

const initialState = {
    loading: false,
    items: {},
    editingItem: undefined
};

export const todo = (state = initialState, { type, payload }) => {
    switch (type) {
        case C.GET_TODOS_REQUEST:
        case C.CREATE_TODO_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case C.GET_TODOS_SUCCESS:
            return {
                loading: false,
                items: payload,
            };
        case C.UPDATE_TODO_REQUEST:
        case C.DELETE_TODO_REQUEST:
            return {
                ...state,
                items: {
                    ...state.items,
                    [payload.id]: {
                        ...payload,
                        loading: true,
                    }
                }
            };
        case C.UPDATE_TODO_FAIL:
        case C.DELETE_TODO_FAIL:
            return {
                ...state,
                items: {
                    ...state.items,
                    [payload.id]: {
                        ...payload,
                        loading: false,
                    }
                }
            };
        case C.UPDATE_TODO_SUCCESS:
            return {
                ...state,
                items: {
                    ...state.items,
                    [payload.id]: {
                        ...payload,
                        loading: false,
                    }
                }
            };
        case C.DELETE_TODO_SUCCESS:
            const {
                [payload.id]: removed,
                ...items
            } = state.items;
            return {
                ...state,
                items
            };
        case C.CREATE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    [payload.id]: {...payload }
                },
            };
        case C.CREATE_TODO_FAIL:
            return {
                ...state,
                loading: false,
            };
        case C.EDIT_TODO:
            return {
                ...state,
                editingItem: payload,
            };
        case C.EDIT_TODO_CLEAR:
            return {
                ...state,
                editingItem: undefined,
            };
        default:
            return state;
    }
};