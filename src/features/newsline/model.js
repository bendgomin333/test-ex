import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fakeData } from "./data";

const initialState = {
  filter: '',
}

const newsAdapter = createEntityAdapter({
  selectId: item => item.id
})

const newsSlice = createSlice({
  name: 'news',
  initialState: newsAdapter.getInitialState(initialState),
  reducers: {
    setNews: (state) => {
      newsAdapter.setAll(state, fakeData)
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    addNews: (state, action) => {
      const { title, text, datetime } = action.payload
      newsAdapter.addOne(state, { id: Math.floor(Math.random() * 1000000), title, text, datetime, moderated: false })
    },
    acceptNewsById: (state, action) => {
      newsAdapter.updateOne(state, { id: action.payload, changes: { moderated: true } })
    },
    deleteNewsById: (state, action) => {
      newsAdapter.removeOne(state, action.payload)
    }
  }
})

export const {
  selectAll: SelectAllNews,
  selectIds: SelectNewsIds,
  selectEntities: SelectNewsEntities,
  selectById: SelectNewsById
} = newsAdapter.getSelectors(state => state.news)

export const { setNews, setFilter, addNews, acceptNewsById, deleteNewsById } = newsSlice.actions

export const NewsReducer = newsSlice.reducer