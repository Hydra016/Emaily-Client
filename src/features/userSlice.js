import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await axios.get(`https://emaily-server-production.up.railway.app/api/current_user`);
    return response 
})

export const handleToken = createAsyncThunk('user/handleToken', async (token) => {
    const response = await axios.post(`https://emaily-server-production.up.railway.app/api/stripe`, token);
    console.log(response)
    return response 
})

const initialState = {
    user: {},
    isLoading: false,
    isAuthenticated: false,
    paymentSuccessful: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        checkUser: (state) => {
            return state.user
        }
    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.isLoading = true
            state.isAuthenticated = false
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload.data
        },
        [fetchUser.rejected]: (state) => {
            state.isLoading = false
            state.isAuthenticated = false
        },
        [handleToken.pending]: (state) => {
            state.paymentSuccessful = false
        },
        [handleToken.fulfilled]: (state, action) => {
            state.paymentSuccessful = true
            state.user = action.payload.data
        },
        [handleToken.rejected]: (state) => {
            state.paymentSuccessful = false
        },
    }
})

export const { checkUser } = userSlice.actions
export default userSlice.reducer;
























