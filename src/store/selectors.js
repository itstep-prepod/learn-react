export const getUsersFromState = (state) => {
    return state.users.users;
};

export const getIsLoading = (state) => {
    return state.users.isLoading;
}