import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   avatar: "banu.png" as string,
   displayName: "Banu Prakash" as string
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // no action and reducers function
  }
})


export default profileSlice.reducer;