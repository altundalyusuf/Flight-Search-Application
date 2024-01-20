import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isFormVisible: false,
    departure: null,
    destination: null,
    departureDate: null,
    returnDate: null,
    isReturnDisabled: false,
    oneDirection: false,
    passengerCount: 1
}

export const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        saveFormData: (state, action) => {
            state.departure = action.payload.departure;
            state.destination = action.payload.destination;
            state.departureDate = action.payload.departureDate;
            state.returnDate = action.payload.returnDate;
            state.isReturnDisabled = action.payload.isReturnDisabled;
            state.oneDirection = action.payload.oneDirection;
            state.passengerCount = action.payload.passengerCount;
        },
        makeFormVisible: (state, action) => {
            state.isFormVisible = action.payload;
        },
        increasePassengerCount: (state) => {
            state.passengerCount = state.passengerCount + 1;
        },
        decreasePassengerCount: (state) => {
            state.passengerCount = Math.max(state.passengerCount - 1, 1);
        },
    },
})

// Action creators are generated for each case reducer function
export const { saveFormData, makeFormVisible, increasePassengerCount, decreasePassengerCount } = formDataSlice.actions

export default formDataSlice.reducer