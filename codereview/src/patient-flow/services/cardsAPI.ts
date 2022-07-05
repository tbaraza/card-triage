import { PatientCardData, PatientCardResponse } from "../patientFlowModel";

// To do: Add test
async function fetchPatientCards(): Promise<PatientCardData[]> {
    const resp = await fetch('http://localhost:3000/cards');
    const data: PatientCardResponse[] = await resp.json();

    // this transformation can be moved to its own function to be more extensible
    return data.map((card: PatientCardResponse) => ({ ...card, display: true }));
}

export default fetchPatientCards;

