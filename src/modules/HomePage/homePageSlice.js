import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadHomePageFeed = createAsyncThunk(
    "homePage/loadHomePageFeed",
    async(params) => {
        const url = 'https://www.reddit.com/r/popular/.json?' + params;

        const response = await fetch(url);
        if(!response.ok) {
            const error = await response.json();
            const message = `An error has occured: ${response.status} ${error.message}`;
            throw new Error(message);
        }
        const data = await response.json();
        return data;
    }
);

const homePageSlice = createSlice({
    name: 'homePage',
    initialState: {
        homePageFeed: [],
        isLoading: false,
        hasError: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadHomePageFeed.pending, (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(loadHomePageFeed.fulfilled, (state, action) => {
            const data = action.payload;
            state.isLoading = false;
            state.hasError = false;
            state.homePageFeed = data.data.children.map(child => child.data);
        })
        .addCase(loadHomePageFeed.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            state.error = action.error.message;
        })
    }
});

export const selectHomePageFeed = state.homePage.homePageFeed;
export const selectIsLoading = state.homePage.isLoading;
export const selectHasError = state.homePage.hasError;
export const selectError = state.homePage.error;

export default homePageSlice.reducer;