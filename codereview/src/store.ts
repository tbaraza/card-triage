import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import patientFlowReducer from './patient-flow/services/patientFlowSlice'


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: () => {};
    }
  }

export const store = configureStore({
  reducer: {
    patientFlow: patientFlowReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// maybe move these to a hooks files
export const useAppDispatch: () => AppDispatch = useDispatch 

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;