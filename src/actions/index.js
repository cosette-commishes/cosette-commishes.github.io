export const changeRoute = currentRoute => {
    return {
        type: 'CHANGE_ROUTE',
        payload: currentRoute
    };
};

export const selectOrder = selectedOrder => {
    return {
        type: 'SELECT_ORDER',
        payload: selectedOrder
    };
};