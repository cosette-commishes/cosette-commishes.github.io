import { combineReducers } from "redux";

const currentRouteReducer = (currentRoute = null, action) => {
    switch (action.type) {
        case "CHANGE_ROUTE": {
            return action.payload;
        }
        default: {
            return currentRoute;
        }
    }
}


const selectedOrderReducer = (selectedOrder = null, action) => {
    switch (action.type) {
        case "SELECT_ORDER": {
            return action.payload;
        }
        default: {
            return selectedOrder;
        }
    }
}

export default combineReducers({
    route: currentRouteReducer,
    order: selectedOrderReducer
});