import { configureStore } from '@reduxjs/toolkit'
import mediaReducer from './movies/mediaSlice'

export const store = configureStore({
    reducer: {
        media: mediaReducer
    }
})