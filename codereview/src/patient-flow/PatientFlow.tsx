import React, { useEffect } from 'react';
import getCards from './services/cardsAPI';
import './PatientFlow.css';
import PatientCard from '../shared/components/cards/PatientCard';
import { PatientCardData } from './patientFlowModel';
import { useAppDispatch, useAppSelector } from '../store';
import { filterByArrhythmias, searchPatientName, setPatientCards, getPendingPatientCards, getDonePatientCards, getRejectedPatientCards } from './services/patientFlowSlice';
import { arrhythmiaFilterCriteria } from './services/filterCards';
import DropdownComponent from '../shared/components/Dropdown';
import SearchComponent from '../shared/components/Search';

function PatientFlow() {
    const dispatch = useAppDispatch();
    const pendingCards = useAppSelector(getPendingPatientCards);
    const rejectedCards = useAppSelector(getRejectedPatientCards);
    const doneCards = useAppSelector(getDonePatientCards);

    useEffect(() => {
        getCards().then((cards: PatientCardData[]) => {
        dispatch(setPatientCards(cards))
        })
    }, [ dispatch ])

    const onSearch = (searchTerm: string) => {
        dispatch(searchPatientName(searchTerm))
    }

    const onFilter = (item: any) => {
        dispatch(filterByArrhythmias(item))
    }

  return (
    <div className="patient-flow">
        <div className="form">
            <SearchComponent onSearch={onSearch} />
            <DropdownComponent onSelect={(item) => onFilter(item)} data={arrhythmiaFilterCriteria} label="Arrythmea" />
        </div>
      <div className="cols">
        <div className="col">
          <h2 className="col__title col__title--gray">PENDING</h2>
          <hr />
          {
            pendingCards.map((card: PatientCardData) => (
                <PatientCard card={card} key={card.id} statuses={['DONE', 'REJECTED']} />
            ))
          }
        </div>
        <div className="col">
          <h2 className="col__title col__title--red">REJECTED</h2>
          <hr />
          {
            rejectedCards.map((card: PatientCardData) => (
                <PatientCard card={card} key={card.id} statuses={['DONE', 'PENDING']} />
            ))
          }
        </div>
        <div className="col">
          <h2 className="col__title col__title--green">DONE</h2>
          <hr />
          {
            doneCards.map((card: PatientCardData) => (
                <PatientCard card={card} key={card.id} statuses={['PENDING', 'REJECTED']} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default PatientFlow;
