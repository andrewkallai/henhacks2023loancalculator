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
      <h1>Loan Calculators and More Information</h1>
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
        <h1>Some Alternatives to Loans</h1>
        <ul>
          <li>
            <h3>Bad Credit Online Loans</h3>
            <p>Calculate Your DTI to determine likely eligibility.</p>
            <button onClick={updateDTI}>Open DTI Calculator</button>
            {DTI && <div style={{alignItems: 'center'}}><DTICalc></DTICalc></div>}
          </li>
          <hr></hr>
          <li>
          <h3>Payday Alternative Loans</h3>
            <p>Typical figures involve a $20 Processing Fee, $200 - $1000 Principal, 1-6 Months Total Period.</p>
            <p>The regular loan calculator can be used to calculate monthly payment. Click <a href="https://mycreditunion.gov/life-events/consumer-loans/payday-loan-alternatives">Here</a> for more information.</p>
          </li>
          <hr></hr>
          <li>
          <h3>Cash Advance Apps</h3>
            <p>Common for individuals with predictable income.</p>
            <p>Cash advances between $20 and $500 are provided on the next paycheck. Click <a href="https://www.nerdwallet.com/article/loans/personal-loans/loan-apps">Here</a> for more information</p>
          </li>
        </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
