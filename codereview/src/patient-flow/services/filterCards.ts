import { PatientCardData } from "../patientFlowModel";

export enum Arrhythmias {
    afib = 'AFib',
    avBlock = 'AV Block',
    pause = 'Pause',
    PSVC = 'PSVC',
    PVC = 'PVC'
}

function filterArrhythmias(cards: PatientCardData[], arrhythmia: string) {
    for (let card of cards) {
      card.display = arrhythmia ? card.arrhythmias.includes(arrhythmia) : true;
    }
    return cards;
}

export  const arrhythmiaFilterCriteria = [
    { name: 'None', value: ''},
    { name: Arrhythmias.afib, value: Arrhythmias.afib },
    { name: Arrhythmias.avBlock, value: Arrhythmias.avBlock },
    { name: Arrhythmias.pause, value: Arrhythmias.pause },
    { name: Arrhythmias.PSVC, value: Arrhythmias.PSVC },
    { name: Arrhythmias.PVC, value: Arrhythmias.PVC },
]

export default filterArrhythmias;