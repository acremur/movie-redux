import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { APIKey } from '../../common/apis/movieApiKey'
import movieApi from '../../common/apis/movieApi'


export const fetchAsyncMovies = createAsyncThunk(
    'media/fetchAsyncMovies', async query => {
        const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${query}&type=movie`)
    
    return response.data
})

export const fetchAsyncSeries = createAsyncThunk(
    'media/fetchAsyncSeries', async query => {
        const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${query}&type=series`)
    
    return response.data
})

export const fetchAsyncMediaDetails = createAsyncThunk(
    'media/fetchAsyncMediaDetails', async id => {
        const response = await movieApi
            .get(`?apiKey=${APIKey}&i=${id}&plot=full`)
    
    return response.data
})

const initialState = {
    query: '',
    movies: {},
    series: {},
    selectedMedia: {}
}

const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        setQueryState: (state, { payload }) => {
            state.query = payload
        },
        removeSelectedMedia: state => {
            state.selectedMedia = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            // console.log('Pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            return { ...state, movies: payload }
        },
        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
            return { ...state, series: payload }
        },
        [fetchAsyncMediaDetails.fulfilled]: (state, { payload }) => {
            return { ...state, selectedMedia: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected!')
        },
    }
})

export const { setQueryState, removeSelectedMedia } = mediaSlice.actions
export const getQueryState = state => state.media.query
export const getAllMovies = state => state.media.movies
export const getAllSeries = state => state.media.series
export const getMediaDetails = state => state.media.selectedMedia
export default mediaSlice.reducer