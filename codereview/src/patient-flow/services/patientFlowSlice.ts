import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PatientCardData, Status } from "../patientFlowModel";
import filterArrhythmias from "./filterCards";
import searchCards from "./searchCards";


export type updatePatientCardStatusPayload = {
    card: PatientCardData;
    status: Status;
}

export const enum PatientCardStatus {
    pending = 'PENDING',
    rejected = 'REJECTED',
    done = 'DONE'
}

const patientFlowSlice = createSlice({
    name: 'patientFlow',
    initialState: [],
    reducers: {
        setPatientCards: (state, action: PayloadAction<PatientCardData[]>) => action.payload,
        updatePatientCardStatus: (state, action: PayloadAction<updatePatientCardStatusPayload>) => updateStatus(state, action.payload),
        searchPatientName: (state, action: PayloadAction<string>) => searchCards(state, action.payload),
        filterByArrhythmias: (state, action: PayloadAction<string>) => filterArrhythmias(state, action.payload),
    },
})

function updateStatus(cards: PatientCardData[], payload: updatePatientCardStatusPayload) {
    const selectedCard = payload.card;
    for (let card of cards) {
        if (card.id === selectedCard.id) {
          card.status = payload.status;
        }
    }

    return cards;
}

// actions
export const { setPatientCards, updatePatientCardStatus, searchPatientName, filterByArrhythmias } = patientFlowSlice.actions;

// selectors
export const getAllPatientCards = (state: RootState) => state.patientFlow;
export const getPendingPatientCards = (state: RootState) => state.patientFlow.filter((card: any) => card.status === PatientCardStatus.pending);
export const getRejectedPatientCards = (state: RootState) => state.patientFlow.filter((card: any) => card.status === PatientCardStatus.rejected);
export const getDonePatientCards = (state: RootState) => state.patientFlow.filter((card: any) => card.status === PatientCardStatus.done);

export default patientFlowSlice.reducer;