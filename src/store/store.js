import { configureStore } from '@reduxjs/toolkit'
import { appsSlice } from './applications/appsSlice'
import { categorySlice } from './category/categorySlice'
import { commentSlice } from './comments/commentSlice'
import { uiSlice } from './ui/uiSlice'

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    applications: appsSlice.reducer,
    ui: uiSlice.reducer,
    comments: commentSlice.reducer,
  },
})