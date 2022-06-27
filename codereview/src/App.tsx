import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [cards, setCards] = useState([]);
  const pendingCards = cards.filter((card: any) => card.status === 'PENDING')
  const rejectedCards = cards.filter((card: any) => card.status === 'REJECTED')
  const doneCards = cards.filter((card: any) => card.status === 'DONE')

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then(resp => resp.json())
      .then(data => {
        data.forEach((card: any, idx: number) => card.display = true);
        setCards(data);
      })
  }, [])

  function doneCard(card: any) {
    for (let i = 0; i < cards.length; i++) {
      const current: any = cards[i];
      if (current === card) {
        current.status = 'DONE';
      }
    }
    setCards([...cards])
  }

  function rejectCard(card: any) {
    for (let i = 0; i < cards.length; i++) {
      const current: any = cards[i];
      if (current === card) {
        current.status = 'REJECTED';
      }
    }
    setCards([...cards])
  }

  function searchCards(value: any) {
    for (let i = 0; i < cards.length; i++) {
      const current: any = cards[i];
      current.display = current.patient_name.match(value)
    }
    setCards([...cards])
  }

  function filterArrhythmias(value: any) {
    for (let i = 0; i < cards.length; i++) {
      const current: any = cards[i];
      current.display = current.arrhythmias.find((name: string) => name === value)
    }
    setCards([...cards])
  }

  return (
    <div className="app">
      <div>
        <h1 style={{ margin: 0, float: 'left', marginRight: '20px' }}>Patient triage app</h1>
        <div className="form">
          <input type="text" onChange={(evt) => searchCards(evt.target.value)} />
          <select onChange={(evt) => filterArrhythmias(evt.target.value)}>
            <option value="">--</option>
            <option value='Afib'>AFib</option>
            <option value='AV Block'>AV Block</option>
            <option value='Pause'>Pause</option>
            <option value='PSVC'>PSVC</option>
            <option value='PVC'>PVC</option>
          </select>
        </div>
      </div>
      <div className="cols">
        <div className="col">
          <p id="pending-title" style={{textAlign: 'center'}}>PENDING</p>
          <hr />
          {pendingCards.map((card: any, idx) => (
            <div className="card" style={{ display: card.display ? 'block' : 'none' }}>
              <h2>{card.patient_name}</h2>
              <p>{card.arrhythmias.join(',')}</p>
              <cite>{new Date(card.creation_date).toLocaleString()}</cite>

              <div>
                <div className="btn" onClick={() => doneCard(card)}>DONE</div>
                <div className="btn" onClick={() => rejectCard(card)}>REJECT</div>
              </div>
            </div>
          ))}
        </div>
        <div className="col">
          <p id="rejected-title"style={{textAlign: 'center'}}>REJECTED</p>
          <hr />
          {rejectedCards.map((card: any, idx) => (
            <div className="card" style={{ display: card.display ? 'block' : 'none' }}>
              <h2>{card.patient_name}</h2>
              <p>{card.arrhythmias.join(',')}</p>
              <cite>{new Date(card.created_date).toLocaleString()}</cite>

              <div>
                <div className="btn" onClick={() => doneCard(card)}>DONE</div>
              </div>
            </div>
          ))}
        </div>
        <div className="col">
          <p id="done-title"style={{textAlign: 'center'}}>DONE</p>
          <hr />
          {doneCards.map((card: any, idx) => (
            <div className="card" style={{ display: card.display ? 'block' : 'none' }}>
              <h2>{card.patient_name}</h2>
              <p>{card.arrhythmias.join(',')}</p>
              <cite>{new Date(card.created_date).toLocaleString()}</cite>

              <div>
                <div className="btn" onClick={() => rejectCard(card)}>REJECT</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
