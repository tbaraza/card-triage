import React from "react";
import { PatientCardData, Status } from "../../../patient-flow/patientFlowModel";
import { updatePatientCardStatus } from "../../../patient-flow/services/patientFlowSlice";
import { useAppDispatch } from "../../../store";
import './PatientCard.css';

function PatientCard(props: { card: PatientCardData, statuses: Status[]}) {
    const { card, statuses } = props;
    const dispatch = useAppDispatch();

    return (
        <div className="card" style={{ display: card.display ? 'block' : 'none' }}>
            <h2>{card.patient_name}</h2>
            <p>Arrythmeas: {card.arrhythmias.join(',')}</p>
            <cite>{new Date(card.created_date).toLocaleString()}</cite>
            <div className="buttons">
                {
                    statuses.map((status: Status) => (
                        <button className="card__btn" key={Math.random()} onClick={() => dispatch(updatePatientCardStatus({card, status}))}>Move to {status}</button>
                        ))
                }
            </div>
        </div>
    )
}

export default PatientCard;
