import { PatientCardData } from "../patientFlowModel"
import filterArrhythmias, { Arrhythmias } from "./filterCards"

const mockData = [
    { display: true, arrhythmias: [Arrhythmias.afib, Arrhythmias.PSVC] },
    { display: true, arrhythmias: [Arrhythmias.afib] },
    { display: true, arrhythmias: [Arrhythmias.PSVC] },
];


describe('Filter patient cards', () => {
    test('filter cards by arrythmia', () => {
        const expected = [
            { display: true, arrhythmias: [Arrhythmias.afib, Arrhythmias.PSVC] },
            { display: true, arrhythmias: [Arrhythmias.afib] },
            { display: false, arrhythmias: [Arrhythmias.PSVC] },
        ];

        const filteredCards = filterArrhythmias(mockData  as PatientCardData[], Arrhythmias.afib);
        expect(filteredCards).toEqual(expected);
    })
})