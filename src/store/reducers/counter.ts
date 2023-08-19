import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export interface ICounterState {
    value: number;
    isLoading: boolean;
}

const initialState: ICounterState = {
    value: 0,
    isLoading: false
};

export const addAsync = createAsyncThunk(
    'counter/addAsync',
    async (value: number) => {
        await new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 1000);
        });
        return value;
    }
);

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.value += action.payload;
        }),
        builder.addCase(addAsync.pending, (state, action) => {
            state.isLoading = true;
        });
    }
});

export const { add } = counterSlice.actions;
export default counterSlice.reducer;