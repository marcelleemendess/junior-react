import { ActionTypes } from "../constants/action-types";

//action = {type, payload}

const initialState = {
    products: [
        {
            id: 1,
            title: "T-shirt",
            category: "women"
        },
    ],
};

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};

