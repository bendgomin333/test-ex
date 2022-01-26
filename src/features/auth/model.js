import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  username: undefined,
  privilegies: 0,
  loading: false,
  error: false
}

const users = [
  { username: 'user', password: 'user', privilegies: 1 },
  { username: 'admin', password: 'admin', privilegies: 2 }
]

export const login = createAsyncThunk('checkAuthData', async ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.username === username)
      user ? user.password === password
        ? resolve({ username: user.username, privilegies: user.privilegies }) // if (!user || user.password !== password)
        : reject('')
        : reject('')
    }, 300)
  })
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false
      state.username = undefined
      state.privilegies = 0
      state.error = false
      state.loading = false
    }
  },
  extraReducers: builder => {
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuth = true
        state.username = action.payload.username
        state.privilegies = action.payload.privilegies
        state.loading = false
        state.error = false
      })
      .addCase(login.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export const { logout } = authSlice.actions

export const AuthReducer = authSlice.reducer