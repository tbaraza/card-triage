import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import patientFlowReducer from './patient-flow/services/patientFlowSlice'

export const store = configureStore({
  reducer: {
    patientFlow: patientFlowReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// maybe move these to a hooks files
export const useAppDispatch: () => AppDispatch = useDispatch 

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;