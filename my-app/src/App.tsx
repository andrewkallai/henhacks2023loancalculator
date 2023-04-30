import React from 'react';
import { useState } from 'react';
import './App.css';
import { CalcDisplay } from './components/PDLoanCalc';
import { PDLoanCalc } from './components/CalcDisplay';
import { DTICalc } from './components/DTICalc';

function App() {
const [DTI, setDTI] = useState<boolean>(false);
function updateDTI() {
  setDTI(!DTI);
}

  return (
    <>
    <div className="App">
      <h1>Loan Calculator</h1>
      <div className="regDisplay">
        <hr></hr>
        <h3 style={{ textAlign: "left", marginLeft: "50px" }}>Pay Day Loan</h3>
        <div className='calcDisplayStyle' style={{marginLeft: "50px", marginBottom:"25px"}}>
        <CalcDisplay></CalcDisplay>
        </div>
        <h3 style={{ textAlign: "left", marginLeft: "50px" }}>Regular Loan</h3>
        <div className='calcDisplayStyle' style={{marginLeft: "50px", marginBottom:"100px"}}>
        <PDLoanCalc></PDLoanCalc>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{textAlign: "left"}}>Alternatives to Loans</h1>
        <ul style={{textAlign:"left"}}>
          <li>
            Bad Credit Online Loans
            <p>Calculate Your DTI to determine likely eligibility.</p>
            <button onClick={updateDTI}>Open DTI Calculator</button>
            {DTI && <DTICalc></DTICalc>}
          </li>
          <li>
            Payday Alternative Loans
            <p>$20 Processing Fee, $200 - $1000 Principal, 1-6 Months Total Period.</p>
            <p>The regular loan calculator can be used to calculate monthly payment.</p>
          </li>
        </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
