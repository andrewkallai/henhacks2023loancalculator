import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { monthlyMortgagePayment } from "../interfaces/Calculator";

export function PDLoanCalc (): JSX.Element {
    const [principle, setPrinciple] = useState<number>(0.0);
    const [interest, setInterest] = useState<number>(0.0);
    const [period, setPeriod] = useState<number>(0.0);
    const [result, setResult] = useState<number>(0.0);
    
    function updatePrinciple(event: React.ChangeEvent<HTMLInputElement>){
        setPrinciple(parseInt(event.target.value));
    }
    function updateInterest(event: React.ChangeEvent<HTMLInputElement>){
        setInterest(parseInt(event.target.value));
    }
    function updatePeriod(event: React.ChangeEvent<HTMLInputElement>){
        setPeriod(parseInt(event.target.value));
    }
    function updateResult(): void {
        setResult(monthlyMortgagePayment(principle,interest,period));
    }
    
    return(
    <div style={{border: "2px dashed grey", padding: "10px", width: "800px"}} className="calculator">
        <Form.Group>
            <Form.Label>Enter Principal Amount: </Form.Label>
            <Form.Control onChange={updatePrinciple}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Enter Interest Rate in %: </Form.Label>
            <Form.Control onChange={updateInterest}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Enter Time Period in Years: </Form.Label>
            <Form.Control onChange={updatePeriod}/>
        </Form.Group>
        <Button onClick={updateResult}>
            Calculate
        </Button>
        <div>Monthly Payment Amount: <span style={{color: "lime"}}>${result}</span></div>
    </div>
    );
}
