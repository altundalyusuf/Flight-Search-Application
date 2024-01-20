import { configureStore } from '@reduxjs/toolkit'
import formDataReducer from './slices/formDataSlice'

export const store = configureStore({
    reducer: {
        formData: formDataReducer,
    },
    // For serializable type warning to disappear
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})