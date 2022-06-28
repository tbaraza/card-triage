import { PatientCardData } from "../patientFlowModel"
import { Arrhythmias } from "./filterCards";
import searchCards from "./searchCards";

const mockData = [
    { patient_name: 'bob', display: true, arrhythmias: [Arrhythmias.afib, Arrhythmias.PSVC] },
    { patient_name: 'Marley', display: true, arrhythmias: [Arrhythmias.afib] },
    { patient_name: 'Mary', display: true, arrhythmias: [Arrhythmias.PSVC] },
];


describe('Search patient card', () => {
    test('search cards by part of patient name', () => {
        const expected = [
            { patient_name: 'bob', display: false, arrhythmias: [Arrhythmias.afib, Arrhythmias.PSVC] },
            { patient_name: 'Marley', display: true, arrhythmias: [Arrhythmias.afib] },
            { patient_name: 'Mary', display: true, arrhythmias: [Arrhythmias.PSVC] },
        ];

        const filteredCards = searchCards(mockData  as PatientCardData[],'M');
        expect(filteredCards).toEqual(expected);
    });

    test('search cards by full patient name', () => {
        const expected = [
            { patient_name: 'bob', display: false, arrhythmias: [Arrhythmias.afib, Arrhythmias.PSVC] },
            { patient_name: 'Marley', display: false, arrhythmias: [Arrhythmias.afib] },
            { patient_name: 'Mary', display: true, arrhythmias: [Arrhythmias.PSVC] },
        ];

        const filteredCards = searchCards(mockData  as PatientCardData[],'Mary');
        expect(filteredCards).toEqual(expected);
    })
})