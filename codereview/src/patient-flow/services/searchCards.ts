import { PatientCardData } from "../patientFlowModel";

function searchCards(cards: PatientCardData[] , searchTerm: string) {
    const tokens = searchTerm
             .toLowerCase()
             .split(' ')
             .filter((token) => token.trim() !== '');

    const searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    
    for (let card of cards) {
      card.display = card.patient_name.match(searchTermRegex) ? true : false;
    }

   return cards;
}

export default searchCards;