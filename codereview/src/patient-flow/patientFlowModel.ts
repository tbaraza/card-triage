export type Status = 'PENDING' | 'REJECTED' | 'DONE';

export type PatientCardResponse = {
    arrhythmias: string[],
    created_date: Date,
    id: number,
    patient_name: string,
    status: Status
}

export type PatientCardData = PatientCardResponse & {
    display: boolean;
}